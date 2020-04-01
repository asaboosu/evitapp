var rowCache = null;

//codigo re mal optimizado

//definicion de tabla

var tabla = $("#tabla").DataTable({
    rowId: 'codigo',
    columnDefs: [{
        "targets": -1,
        "data": 'eliminar',
        "defaultContent": "<button class='btn btn-danger eliminar'>X</button>"
    }, {
        "targets": -2,
        "data": 'seleccionar',
        "defaultContent": "<button class='btn btn-warning seleccionar'>#</button>"
    }],

    columns: [
        { data: 'codigo' },
        { data: 'nombre' },
        { data: 'tipo' },
        { data: 'categoria' },
        { data: 'precio' },
        { data: 'existencias' },
        { data: 'seleccionar' },
        { data: 'eliminar' }

    ],
    pageLength: 5,
    lengthChange: false,
    searching: true
});


//limpiar campos y prodcutoCache

var limpiarSeleccion = function() {
    $('#codigo').val('');
    $('#nombre').val('');
    $('#tipo').val('');
    $('#categoria').val('');
    $('#precio').val('');
    $('#existencias').val('');
    rowCache = null;
    $('#codigo').focus();
};

var listenerLimpiarSeleccion = function() {
    $('body').on('click', '.limpiar', function() {
        limpiarSeleccion();
    });
};


//acciones seleccion

var eventoSeleccionar = function(row) {
    var producto = row.data();
    $('#codigo').val(producto.codigo);
    $('#nombre').val(producto.nombre);
    $('#tipo').val(producto.tipo);
    $('#categoria').val(producto.categoria);
    $('#precio').val(producto.precio);
    $('#existencias').val(producto.existencias);
    rowCache = row;
};

var listenerSeleccionar = function() {
    $('#tabla tbody').on('click', '.seleccionar', function() {
        limpiarSeleccion();
        row = tabla.row($(this).parents('tr'));
        eventoSeleccionar(row);
    });
};


//acciones de filtro de campos

var filtradoEntrada = function() {
    $('#codigo').focus();
    return (
        $('#codigo').val().trim() &&
        $('#nombre').val().trim() &&
        $('#precio').val().trim() &&
        $('#existencias').val().trim() &&
        $('#categoria').val().trim()
    ) ? true : false;

};

//acciones de modificar

var eventoModificar = function(row) {
    var resultado1 = $('#' + $('#codigo').val()).length;
    var resultado2 = (filtradoEntrada()) ? false : true;
    alert();
    switch (row) {
        case resultado2:
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hay uno o mas campos vacios, rellenelos.',
            });

            break;
            //xd
        case resultado1:
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El codigo ya esta agregado, modifiquelo.',
            });
            break;
        default:
            var productoNuevo = {};
            productoNuevo.categoria = $('#categoria').val();
            productoNuevo.codigo = $('#codigo').val();
            productoNuevo.nombre = $('#nombre').val();
            productoNuevo.tipo = $('#tipo').val();
            productoNuevo.precio = $('#precio').val();
            productoNuevo.existencias = $('#existencias').val();
            Swal.fire({
                title: '¿ Esta Seguro ?',
                text: "Se Modificara el producto",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
            }).then((result) => {
                if (result.value === true) {
                    row.data(productoNuevo).draw();
                    limpiarSeleccion();
                    Swal.fire({
                        icon: 'success',
                        title: 'Exito',
                        text: 'Se ha modificado el producto.'
                    });

                }
            });
            break;
    }
    $('#codigo').focus();
};

//acciones de agregar

var eventoAgregar = function() {
    var resultado1 = ($('#' + $('#codigo').val()).length == 1) ? true : false;
    var resultado2 = (filtradoEntrada()) ? false : true;
    switch (true) {
        case resultado2:
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hay uno o mas campos vacios, rellenelos.',
            });
            alert();
            break;
        case resultado1:
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El codigo ya esta agregado, modifiquelo.',
            });
            alert();
            break;
        default:
            var productoNuevo = {};
            productoNuevo.categoria = $('#categoria').val();
            productoNuevo.codigo = $('#codigo').val();
            productoNuevo.nombre = $('#nombre').val();
            productoNuevo.tipo = $('#tipo').val();
            productoNuevo.precio = $('#precio').val();
            productoNuevo.existencias = $('#existencias').val();
            Swal.fire({
                title: '¿ Esta Seguro ?',
                text: "Se añadira el producto: " + productoNuevo.nombre + " " + productoNuevo.tipo,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
            }).then((result) => {
                if (result.value === true) {
                    tabla.row.add(productoNuevo).draw();
                    limpiarSeleccion();
                    Swal.fire({
                        icon: 'success',
                        title: 'Exito',
                        text: 'Se ha agregado el producto: ' + productoNuevo.nombre + ' ' + productoNuevo.tipo + '.'
                    });
                }
            });
            break;
    }
    $('#codigo').focus();
};

//acion de guardar

var listenerGuardar = function() {
    $('body').on('click', '.guardar', function() {
        if (rowCache == null) {
            eventoAgregar();

        } else {
            eventoModificar(rowCache);

        }
        $('#codigo').focus();
    });


};

//acciones eliminar 

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
            limpiarSeleccion();
            Swal.fire({
                icon: 'success',
                title: 'Exito',
                text: 'Se ha Eliminado el producto.'
            });

        }
    });
};

var listenerEliminar = function() {
    $('#tabla tbody').on('click', '.eliminar', function() {
        var row = tabla.row($(this).parents('tr'));
        eventoEliminar(row);
    });
};

//acciones completar

var eventoCompletar = function(productos) {
    Swal.fire({
        title: '¿ Esta Seguro ?',
        text: "Se agregaran los producto.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        productos = JSON.stringify(productos);
        alert(productos);
        if (result.value === true) {
            $.ajax({

                url: "http://" + window.location.hostname + "/producto/crear",

                type: "POST",


                data: {
                    "productos": productos
                },

                success: function(resp) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Exito',
                        text: 'Se han agregado los productos.'
                    });
                    window.location.pathname = 'producto';

                },

                error: function(resp) {
                    var respuesta = resp.responseText;
                    switch (true) {
                        case /.uplicate .ntry/g.test(respuesta):
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Un id ingresado ya existe.'
                            })
                            break;

                        default:
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'ha ocurrido un error en la peticion al servidor'
                            })
                            break;
                    }
                }
            });


        }
    });
};

var listenerCompletar = function() {
    $('body').on('click', '.completar', function() {
        limpiarSeleccion();
        var productos = [];
        var rows = tabla.rows().data();
        //se que esta mal esto
        for (let index = 0; index < rows.length; index++) {
            const element = rows[index];
            var producto = element;
            productos.push(producto);
        }
        eventoCompletar(productos);
    });
};



//aciones cancelar

var eventoCancelar = function() {
    Swal.fire({
        title: '¿ Esta Seguro ?',
        text: "Se perderan los productos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.value === true) {
            window.location.pathname = '/producto';

        }
    });

};

var listenerCancelar = function() {
    $('body').on('click', '.salir', function() {
        limpiarSeleccion();
        eventoCancelar();
    });
};

var eventoExisteID = function(id) {
    $.ajax({
        url: '/producto/existe/' + id,
        type: 'POST',
        onSucess: function() {},
        onError: function() {},

    });
};





$(document).ready(function() {
    listenerSeleccionar();
    listenerGuardar();
    listenerLimpiarSeleccion();
    listenerEliminar();
    listenerCancelar();
    listenerCompletar();
    $('#codigo').focus();
});