var ajax = new ajaxFactory();
var listener = new listenerFactory();
var alerta = new sweetAlertFactory();

var eventoContraseña = function(contraseña) {
    ajax.setDatos({ "contraseña": contraseña });
    ajax.peticion(
        'admin',
        'login',
        '',
        function(resp) {
            if (resp == false) {

                alerta.default(
                    'error',
                    'Opss..',
                    'Contraseña incorrecta.'
                );
            } else {
                window.location.pathname = '/' + resp;
            }
        },
        function(resp) {
            alerta.default(
                'error',
                'Error',
                'Ha fallado la modificacion del producto.'
            );

        },
        "POST"
    );
};

listener.default('body', '.enviar', function() {
    var contraseña = $('#contraseña').val();
    eventoContraseña(contraseña);
});