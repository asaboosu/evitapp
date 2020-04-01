//factorias

listener = new listenerFactory();
ajax = new ajaxFactory();
alerta = new sweetAlertFactory();

// eventos

var eventoAbrirCompra = function(id) {
    if (id.trim() !== '') {
        window.location.pathname = '/compra/ver/' + id;

    } else {
        alerta.default('warning', 'Error', 'Debe ingresar un codigo de compra primero.');

    }
};


//

var focusin = function() {
    $('#abrir').focus();
};

// input

var getInput = function() {
    return $('#abrir').val();
};

//listeners

listener.default('body', '#abrirBtn', function() {
    var id = getInput();
    eventoAbrirCompra(id);
});

listener.default('body', '#abrirBtn', function() {
    var id = getInput();
    eventoAbrirCompra(id);
});

$('body').on('change', '#abrir', function() {
    eventoAbrirCompra($(this).val())
});

$(document).ready(function() {
    focusin();

});