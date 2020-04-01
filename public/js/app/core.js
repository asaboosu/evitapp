//implementacion de patron factoria, por experimentar xd, tenia tiempo

class listenerFactory {
    //nombreElemento = identificador jQuery de elemento ligado a evento
    //referenciaTabla = referencia directa a una DataTable
    //acciones = function(){...}
    row(idTabla, nombreElemento, referenciaTabla, acciones) {
        var listener = $(idTabla + ' tbody').on('click', nombreElemento, function() {
            var rowsito = referenciaTabla.row($(this).parents('tr'));
            acciones(rowsito);
        });
        return listener;
    }

    default (elementoPadreJquery, nombreElemento, acciones) {
        var listener = $(elementoPadreJquery).on('click', nombreElemento, function() {
            acciones();
        });
        return listener;
    }
    //xd
    rowChange(idTabla, nombreElemento, referenciaTabla, acciones) {
        var listener = $(idTabla + ' tbody').on('change', nombreElemento, function() {
            var rowsito = referenciaTabla.row($(this).parents('tr'));
            var input = $(this);
            acciones(rowsito, input);
        });
        return listener;
    }

}

class sweetAlertFactory {
    //leer api sweet alert
    default (icono, titulo, texto) {

        return Swal.fire({
            icon: icono,
            title: titulo,
            text: texto
        });
    }

    success(icono, titulo, texto, onSuccess) {

        return Swal.fire({
            icon: icono,
            title: titulo,
            text: texto
        }).then((result) => {
            if (result.value === true) {
                onSuccess();
            }
        });
    }

    eleccion(icono, titulo, texto, onSuccess, onCancel) {
        return Swal.fire({
            title: titulo,
            text: texto,
            icon: icono,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
        }).then((result) => {
            if (result.value === true) {
                onSuccess();
            } else {
                onCancel();
            }
        });
    }

    eleccionHtml(titulo, icono, html, onSuccess, onCancel) {
        return Swal.fire({
            title: titulo,
            html: html,
            icon: icono,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok'
        }).then((result) => {
            if (result.value === true) {
                onSuccess();
            } else {
                onCancel();
            }
        });
    }



}



class ajaxFactory {

    direccion = 'http://' + window.location.hostname;

    datos = '';
    //onSuccess,onError = function(resp)
    //data = array
    //tipo = "POST"||"GET"
    //controlador = controlador de la api codeiginter
    //metodo = metodo de controlador de api...
    //data = data para el input1 de metodo de api...
    peticion(controlador, metodo, dataUrl, accionesCorrecto, accionesError, tipo) {

        $.ajax({

            url: this.direccion + '/' + controlador + '/' + metodo + '/' + dataUrl,

            type: tipo,

            data: this.datos,

            success: function(resp) {
                accionesCorrecto(resp);
            },

            error: function(resp) {
                accionesError(resp);
            }
        });
        this.datos = '';
    }

    setDatos(datos) {
        this.datos = datos;
    }



}

class filtro {
    //data = array asociativo con selector Jquery de inputs y valor de comparacion erronea
    constructor(data) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                var input = $(key).value().trim();
                var comparacion = data[key];
                return (input === comparacion) ? true : false;
            }
        }
    }
}