var id = window.location.pathname.split("/");
//id extraida de la url
id = id[3];

//factorias

var listener = new listenerFactory();
var ajax = new ajaxFactory();
var alerta = new sweetAlertFactory();

//eventos
var eventoPagar = function() {
    var compra = {};
    var medioPago = $('#medioPago').val();
    compra.total = $('#total').val();
    compra.hora = $('#hora').val();
    compra.id = id;
    compra.realizada = 0;
    ajax.setDatos({ 'compra': compra });
    ajax.peticion(
        'compra',
        'modificar',
        id,
        function(resp) {
            ajax.setDatos({
                'medioPago': medioPago,
                'total': compra.total,

            });
            ajax.peticion(
                'compra',
                'completar',
                id,
                function(resp) {},
                function(resp) {},
                "POST");

            alerta.default(
                'success',
                'Exito',
                'Se ha completado la compra.'
            );

            boleta()
            window.location.pathname = "Inicio";
        },
        function(resp) {
            alerta.default(
                'error',
                'Error',
                'Ha fallado la compra.'
            );

        },
        "POST");
};


var boleta = function() {
    var print_area = window.open("http://" + window.location.hostname + "/compra/boleta/" + id);
    print_area.print();
    setTimeout(() => { print_area.close(); }, 200);

};

var xd = function(key, value) { window.localStorage.setItem(key, value) };

$('body').on('click', '#total', function() {
    var texto =
        '<div class="rounded-lg mb-2 w-100 mx-auto border border-dark mt-3">' +
        '<div class="input-group input-group-md ">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="inputGroup-sizing-md">Contraseña:' +
        ' </span>' +
        '</div>' +
        '<input id="contraseña" onchange="xd(\'contraseña\',this.value);" type="password" class="form-control" aria-label="" aria-describedby="inputGroup-sizing-md">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="rounded-lg mb-2 w-100 mx-auto border border-success mt-3">' +
        '<div class="input-group input-group-md ">' +
        '<div class="input-group-prepend">' +
        '<span class="input-group-text" id="inputGroup-sizing-md">Nuevo Valor:' +
        ' </span>' +
        '</div>' +
        '<input id="valor" onchange="xd(\'valor\',this.value);" type="number" class="form-control" aria-label="" aria-describedby="inputGroup-sizing-md">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    if ($(this).is(":focus")) {
        Swal.fire({
            title: 'Ingrese Contraseña de administrador',
            html: texto,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.value) {
                var contraseña = localStorage.getItem("contraseña");
                var valor = localStorage.getItem("valor");
                ajax.setDatos({
                    'contraseña': contraseña
                });
                ajax.peticion(
                    'admin',
                    'login',
                    '',
                    function(resp) {
                        if (resp) {
                            $('#total').val(valor);
                        } else {
                            alerta.default(
                                'error',
                                'Oops',
                                'Contraseña incorrecta.'
                            );
                        }
                    },
                    function(resp) {},
                    "POST");
            } else {
                alerta.default(
                    'warning',
                    'Oops',
                    'No se han realizado cambios.'
                );
            }
        });
    }


});


//listeners
listener.default('body', '#completar', function() {
    eventoPagar();
});
listener.default('body', '.cancelar', function() {
    eventoCancelar();
});