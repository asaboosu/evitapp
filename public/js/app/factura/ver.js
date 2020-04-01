var año = (window.location.pathname).split('/')[3];
var mes = (window.location.pathname).split('/')[4];

var tabla = $("#tabla1").DataTable({
    ajax: "http://" + window.location.hostname + "/factura/ver/" + año + "/" + mes,
    columnDefs: [{
        "targets": -1,
        "data": 'detalle',
        "defaultContent": "<button class='btn btn-warning detalle' onclick='' >Detalle</button>"
    }],

    columns: [
        { data: 'id' },
        { data: 'iva' },
        { data: 'total' },
        { data: 'Fecha_fecha' },
        { data: 'hora' },
        { data: 'medioPago' },
        { data: 'detalle' }


    ],
    pageLength: 10,
    lengthChange: false,
    searching: false
});


var eventoDetalle = function(row) {

    window.location.pathname = "/compra/ver/" + row.data().Compra_id;
};

$('#tabla1 tbody').on('click', '.detalle', function() {
    var row = tabla.row($(this).parents('tr'));
    eventoDetalle(row);
});