var listener = new listenerFactory();
var ajax = new ajaxFactory();
var alerta = new sweetAlertFactory();



$('body').on('click', '.abrir', function() {
    var año = $('#año').val();
    var mes = $(this).attr('value');
    window.location.pathname = "factura/ver/" + año + "/" + mes;
});