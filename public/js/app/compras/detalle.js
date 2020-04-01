//Factorias

var alerta = new sweetAlertFactory();
var ajax = new ajaxFactory();
var listener = new listenerFactory();

//data
var idCompra = (window.location.pathname).split('/')[3];

//tabla
var tablaPopOver;
//tabla
var crearTablaPopOver = function(categoria) {
    tablaPopOver = $("#tablaPopOver").DataTable({
        ajax: "http://" + window.location.hostname + "/producto/ver/" + categoria,
        rowId: 'codigo',
        columnDefs: [{
            "targets": -1,
            "data": 'seleccionar',
            "defaultContent": "<button class='btn btn-warning seleccionar'>X</button>"
        }],

        columns: [
            { data: 'codigo' },
            { data: 'nombre' },
            { data: 'tipo' },
            { data: 'precio' },
            { data: 'existencias' },
            { data: 'seleccionar' }

        ],
        pageLength: 10,
        lengthChange: false,
        searching: true
    });
};

var datos = function() {};
var tabla = $("#tabla").DataTable({
    ajax: "http://" + window.location.hostname + "/compra/ver/" + idCompra,
    rowId: 'codigo',
    columnDefs: [{
        "targets": -1,
        "data": '',
        "defaultContent": "<tton class='btn btn-danger eliminar'>X</button>"
    }, {
        "targets": -2,
        "data": 'cantidad',
        "render": function(data, type, row, meta) {
            var val = (data == null) ? 1 : data;
            return '<input style="width: 70%;" type="number" class="cantidad form-control mx-auto" name="" id="" value="' + val + '">'
        }
    }, {
        "targets": -3,
        "data": 'total',
        "render": function(data, type, row, meta) {
            row.total = (row.cantidad == null) ? row.precio : row.precio * row.cantidad;
            return '<span  class="total">' + row.total + '</>'
        },
    }],

    columns: [
        { data: 'codigo' },
        { data: 'nombre' },
        { data: 'tipo' },
        { data: 'precio' },
        { data: 'total' },
        { data: 'cantidad' },
        { data: 'eliminar' }

    ],
    pageLength: 10,
    lengthChange: false,
    searching: false
});

//listeners
//inputs

var boleta = function() {
    var print_area = window.open("http://" + window.location.hostname + "/compra/ticketcliente/" + idCompra);
    print_area.print();
    setTimeout(() => { print_area.close(); }, 200);
    window.location.pathname = "/Inicio";
};

var useInput = function(id, data) {
    var resultado = false;

    if (data == false) {
        $(id).val('');
        resultado = true;

    } else {
        resultado = $(id).val();
    }
    return resultado;
};

// eventos

var eventoAgregar = function(codigo) {
    ajax.peticion(
        'producto',
        'producto',
        codigo,
        function(resp) {
            var producto = JSON.parse(resp);
            producto.cantidad = 1;

            try {
                useInput('#codProducto', false);
                tabla.row.add(producto[0]).draw();
                eventoTotal();
                eventoGuardar();
                alerta.default(
                    'success',
                    'Exito',
                    'Se ha agregado el producto.'
                );
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El producto no se ha encontrado.'
                });
            }


        },
        function(resp) {},
        'POST'

    );
};
var eventoCancelar = function() {
    window.location.pathname = "/compra";
};

var eventoCompletar = function() {
    window.location.pathname = "/compra/completar/" + idCompra;

    //ajax.peticion(
    //    'compra',
    //    'completar',
    //    row.data().id,
    //    function(resp) {
    //        alerta.default('success', 'Exito', 'Se ha completado la compra.');
    //    },
    //    function(resp) {
    //        alerta.default('error', 'Oops...', 'Ha ocurrido un error con la peticion al servidor.');
    //    },
    //    "POST");
};

var eventoEliminar = function(row) {
    Swal.fire({
        title: '¿ Esta Seguro ?',
        text: "Se eliminara el producto.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.value === true) {
            row.remove().draw();
            useInput('', false);
            eventoTotal();
            eventoGuardar();
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'Se ha Eliminado el producto.'
            });

        }
    });
};

var eventoPopOverBuscar = function() {
    var texto =
        '<div class="rounded-lg mb-2 w-100 mx-auto border border-dark mt-3">' +
        '<table id="tablaPopOver" class="table table-striped table-bordered mx-auto table-responsive-sm"cellspacing="0" width="95%">' +
        '<thead class="bg-danger border border-dark">' +
        '<tr>' +
        '<th class="th-sm">Cod' +
        '</th>' +
        '<th class="th-sm">Nombre' +
        '</th>' +
        '<th class="th-sm">Tipo' +
        '</th>' +
        '<th class="th-sm">Precio' +
        '</th>' +
        '<th class="th-sm">existencias' +
        '</th>' +
        '<th class="th-sm">seleccionar' +
        '</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '</tbody>' +
        '</table>' +
        '</div>';

    Swal.fire({
        title: '¿ Esta Seguro ?',
        html: texto,
        icon: 'warning',
        width: '80%',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        showConfirmButton: false
    }).then((result) => {
        if (result.value) {} else {}
    });
    eventoTotal();
};

var eventoBuscar = function(categoria) {
    eventoPopOverBuscar();
    crearTablaPopOver(categoria);

};


var xd = function(key, value) { window.localStorage.setItem(key, value) };

var eventoPopOver = function() {
    var texto =
        '<div class="rounded-lg mb-2 w-100 mx-auto border border-dark mt-3">' +
        '<div class="input-group input-group-md ">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="inputGroup-sizing-md">Codigo:' +
        ' </span>' +
        '</div>' +
        '<input id="codigoProd" onchange="xd(\'codigoprod\',this.value);" type="text" class="form-control" aria-label="" aria-describedby="inputGroup-sizing-md">' +
        '</div>' +
        '</div>' +
        '<div class="rounded-lg mb-2 w-100 mx-auto border border-dark">' +
        '<div class="input-group input-group-md ">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="inputGroup-sizing-md">Nombre: </span>' +
        '</div>' +
        '<input id="nombreProd" onchange="xd(\'nombreprod\',this.value);" type="text" class="form-control" aria-label="" aria-describedby="inputGroup-sizing-md">' +
        '</div>' +
        '</div>' +
        '<div class="rounded-lg mb-2 w-100 mx-auto border border-dark">' +
        '<div class="input-group input-group-md ">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="inputGroup-sizing-md">Precio: </span>' +
        '</div>' +
        '<input id="precioProd" onchange="xd(\'precioprod\',this.value)" type="number" class="form-control" aria-label="" aria-describedby="inputGroup-sizing-md">' +
        '</div>' +
        '</div>';

    Swal.fire({
        title: '¿ Esta Seguro ?',
        html: texto,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.value) {
            var codigo = localStorage.getItem("codigoprod");
            var nombre = localStorage.getItem("nombreprod");
            var precio = localStorage.getItem("precioprod") ? localStorage.getItem("precioprod") : '';
            if (codigo.trim() && nombre.trim() && precio.trim()) {
                var producto = {};
                producto.nombre = nombre;
                producto.codigo = codigo;
                producto.precio = precio;
                producto.cantidad = 1;
                producto.tipo = 'especial';
                tabla.row.add(producto).draw();
                eventoGuardar();
                eventoTotal();

                localStorage.setItem('codigoprod', '');
                localStorage.setItem('nombreprod', '');
                localStorage.setItem('precioprod', '');
            } else {
                alerta.default(
                    'warning',
                    'Oops',
                    'Hay campos incompletos, rellenelos.'
                );
            }

        } else {
            alerta.default(
                'warning',
                'Oops',
                'No se ha agregado ningun producto.'
            );
        }
    });
};

var eventoTotal = function() {
    var total = 0;
    $('.total').each(function() {
        total = total + parseInt($(this).html());
    });
    $('#total').val(total);
};

var ticket = function() {
    var print_div = "text";
    var print_area = window.open();
    print_area.document.write(print_div);
    print_area.document.close();
    print_area.focus();
    print_area.print();
    print_area.close();

}

var eventoCantidad = function() {
    $('.cantidad').each(function() {
        var row = tabla.row($(this).parents('tr'));
        var input = $(this);
        var producto = row.data();
        var total = producto.precio * input.val();
        var productoNuevo = {
            'codigo': producto.nombre,
            'nombre': producto.nombre,
            'tipo': producto.tipo,
            'precio': producto.precio,
            'total': total,
            'cantidad': input.val(),
            'existencias': producto.existencias
        }
        row.remove().draw();
        tabla.row.add(productoNuevo).draw();
        eventoTotal();
        eventoGuardar();
    });

};

var eventoGuardar = function() {
    var productos = [];
    var rows = tabla.rows().data();
    //se que esta mal esto
    for (let index = 0; index < rows.length; index++) {
        const element = rows[index];
        var producto = element;
        productos.push(producto);
    }
    $.ajax({
        url: 'http://' + window.location.hostname + "/" + "compra/modificar/" + idCompra,
        type: "POST",
        data: {
            'productos': JSON.stringify(productos)
        }
    }).then(function(response) {

    });
};
//listeners

listener.default('body', '.agregar', function() {
    var id = useInput('#codProducto', true);
    if (id == false) {
        alerta.default(
            'error',
            'Oops...',
            'Se debe insertar un codigo de producto primero.'
        );
    } else {
        eventoAgregar(id);
    }

});

listener.default('body', '.agregarDetalleEspecial', function() {
    eventoPopOver();
});

$('html').on('click', '.seleccionar', function() {
    var row = tablaPopOver.row($(this).parents('tr'));
    eventoAgregar(row.data().codigo);
});


listener.row('#tabla', '.eliminar', tabla, function(row) {
    eventoEliminar(row);
});


$('#tabla tbody').on('change', '.total', function() {
    var input = $(this).val();
    var row = tabla.row($(this).parents('tr'));
    var prodNuevo = row.data();
    prodNuevo.total = input;
    row.data(prodNuevo).draw();
    eventoTotal();

});

$('#tabla tbody').on('change', '.cantidad', function() {
    eventoCantidad();
});

listener.default('body', '.completar', function() {
    eventoCompletar();
});

listener.default('body', '.cancelar', function() {
    eventoCancelar();
});

listener.default('body', '#guardar', function() {
    eventoGuardar();
    eventoCancelar();
});

$('body').on('change', '.buscar', function() {
    var input = $(this).val();
    if (input.trim() != '') {
        eventoBuscar(input);

    }
});

$('body').on('click', '#buscar', function() {
    var input = $('.buscar').val();

    if (input.trim() != '') {
        eventoBuscar(input);

    }
});

$(document).ready(function() {
    setTimeout(() => { eventoTotal(); }, 200);
});