var categoria = window.location.pathname.split("/");
//categoria extraida de la url
categoria = categoria[3];


//FACTORIAS
var ajax = new ajaxFactory();
var listener = new listenerFactory();
var alerta = new sweetAlertFactory();

//data


window.idRowCache;

window.productoCache;


//acciones inputs

function setInputs(producto) {
    $('#codigo').val(producto.codigo);
    $('#nombre').val(producto.nombre);
    $('#tipo').val(producto.tipo);
    $('#precio').val(producto.precio);
    $('#categoria').val(categoria)
    $('#existencias').val(producto.existencias);
}

function clearInputs() {
    $('#codigo').val('');
    $('#nombre').val('');
    $('#tipo').val('');
    $('#precio').val('');
    $('#existencias').val('');
    $('#categoria').val('')
}

function getInputs() {
    var producto = {};
    producto.codigo = $('#codigo').val();
    producto.nombre = $('#nombre').val();
    producto.tipo = $('#tipo').val();
    producto.categoria = $('#categoria').val();
    producto.precio = $('#precio').val();
    producto.existencias = $('#existencias').val();

    return producto;
}

//tabla
var tabla = $("#tabla").DataTable({
    ajax: "http://" + window.location.hostname + "/producto/ver/" + categoria,
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
        { data: 'precio' },
        { data: 'existencias' },
        { data: 'seleccionar' },
        { data: 'eliminar' }

    ],
    pageLength: 5,
    lengthChange: false,
    searching: true
});


//eventos

var eventoEliminar = function(producto) {
    alert(producto.codigo);
    ajax.peticion(
        'producto',
        'eliminar',
        producto.codigo,
        function(resp) {
            alerta.default(
                'success',
                'Exito',
                'Se ha eliminado el producto: ' + producto.nombre + ' ' + producto.tipo
            );
            tabla.ajax.reload();
        },
        function(resp) {
            alerta.default(
                'error',
                'Error',
                'Ha fallado la eliminacion del producto: ' + producto.nombre + ' ' + producto.tipo
            );
        },

        "POST");

};


var eventoGuardar = function(idRow, productoViejo) {
    var productoNuevo = getInputs();
    var productoViejo = productoViejo;
    ajax.setDatos({ "productoNuevo": productoNuevo, "productoViejo": productoViejo });
    ajax.peticion(
        'producto',
        'modificar',
        idRow,
        function(resp) {
            alerta.default(
                'success',
                'Exito',
                'Se ha modificado el producto.'
            );
            tabla.ajax.reload();
        },
        function(resp) {
            alerta.default(
                'error',
                'Error',
                'Ha fallado la modificacion del producto.'
            );

        },
        "POST");

};


var eventoSeleccionar = function(producto, idRow) {
    window.idRowCache = idRow;
    window.productoCache = producto;
    setInputs(producto);
};


var eventoLimpiar = function() {
    clearInputs();
    window.idRowCache = null;
    window.productoCache = null;
};


//listeners

listener.row('#tabla', '.eliminar', tabla, function(row) {
    var producto = row.data();
    eventoEliminar(producto);
    eventoLimpiar();

});
listener.row('#tabla', '.seleccionar', tabla, function(row) {
    eventoLimpiar();
    producto = row.data();
    idRow = row.id();
    eventoSeleccionar(producto, idRow);
});
listener.default('body', '.guardar', function() {
    idRow = window.idRowCache;
    productoViejo = window.productoCache;
    if (productoViejo == null || idRow == null) {
        alerta.default(
            'error',
            'Oops...',
            'Debe seleccionarse un producto antes.'
        );
    } else {
        eventoGuardar(idRow, productoViejo);

    }
    eventoLimpiar();

});
listener.default('body', '.limpiar', function() {
    eventoLimpiar();
});




//recargar ajax
setInterval(function() {
    tabla.ajax.reload();
}, 69000);



$(document).ready(function() {

});