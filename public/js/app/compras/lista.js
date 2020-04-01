//factorias requeridas 
var ajax = new ajaxFactory();
var listener = new listenerFactory();
var alerta = new sweetAlertFactory();

function recargar() {
    tablaPagada.ajax.reload();
    tablaProceso.ajax.reload();
}

var eventoDetalle = function(row) {

    window.location.pathname = "/compra/ver/" + row.data().id;
};


var eventoDetallePagada = function(row) {

    window.location.pathname = "/compra/ver/" + row.data().id;
};


var eventoTerminar = function(row) {
    ajax.peticion(
        'compra',
        'terminar',
        row.data().id,
        function(resp) {},
        function(resp) {},
        "POST");

    alerta.default(
        'success',
        'Exito',
        'Se ha completado la compra.'
    );
    recargar();

};

var eventoCompletar = function(row) {
    window.location.pathname = "/compra/completar/" + row.data().id;

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
    ajax.peticion(
        'compra',
        'cancelar',
        row.data().id,
        function(resp) {
            alerta.default('success', 'Exito', 'Se ha eliminado satisfatoriamente.');
            recargar();
        },
        function(resp) {
            alerta.default('error', 'Oops...', 'Ha ocurrido un error con la peticion al servidor.');
        },
        "POST");
};


//definicion tablas 

var tablaProceso = $("#tablaProceso").DataTable({
    ajax: "http://" + window.location.hostname + "/compra/ver/proceso",
    columnDefs: [{
        "targets": -3,
        "data": 'completar',
        "defaultContent": "<button class='btn btn-success completar'>Completar</button>"
    }, {
        "targets": -2,
        "data": 'detalle',
        "defaultContent": "<button class='btn btn-warning detalle'>Detalle</button>"
    }, {
        "targets": -1,
        "data": 'eliminar',
        "defaultContent": "<button class='btn btn-danger eliminar'>X</button>"
    }],

    columns: [
        { data: 'id' },
        { data: 'hora' },
        { data: 'total' },
        { data: 'completar' },
        { data: 'detalle' },
        { data: 'eliminar' }

    ],
    pageLength: 10,
    lengthChange: false,
    searching: false
});

var tablaPagada = $('#tablaPagada').DataTable({
    ajax: "http://" + window.location.hostname + "/compra/ver/pagada",
    columnDefs: [{
        "targets": -2,
        "data": 'completar',
        "defaultContent": "<button class='btn btn-success terminar'>Completar</button>"
    }, {
        "targets": -1,
        "data": 'detalle',
        "defaultContent": "<button class='btn btn-warning detalle'>Detalle</button>"
    }],
    columns: [
        { data: 'id' },
        { data: 'hora' },
        { data: 'total' },
        { data: 'completar' },
        { data: 'detalle' },
    ],
    pageLength: 10,
    lengthChange: false,
    searching: false
});

//iniciar factoria

//iniciar listeners

listener.row('#tablaProceso', '.detalle', tablaProceso, function(row) {
    eventoDetalle(row);
});
listener.row('#tablaProceso', '.eliminar', tablaProceso, function(row) {
    eventoEliminar(row);
    recargar();
});

listener.row('#tablaProceso', '.completar', tablaProceso, function(row) {
    eventoCompletar(row);
});

listener.row('#tablaPagada', '.detalle', tablaPagada, function(row) {
    eventoDetallePagada(row);
});
listener.row('#tablaPagada', '.eliminar', tablaPagada, function(row) {
    eventoEliminar(row);
    recargar();
});
listener.row('#tablaPagada', '.terminar', tablaPagada, function(row) {
    eventoTerminar(row);
});

listener.default('body', '.cancelar', function() {
    eventoCancelar();
});

listener.default('body', '.nav-link', function() {
    recargar();
});

//recargar ajax
setInterval(function() {
    recargar();
}, 30000);


$(document).ready(function() {


});