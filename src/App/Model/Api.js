/**
 * clase para api rest
 */
class api {

    /**
     * url base
     */
    url = 'https://www.fakeapi.online/api/apis/asd/';

    /**
     * init estatico para utilizar de reinicio en todas las instancias
     */
    static defaultInit = {
        mode: 'cors',
        cache: 'default',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    /**
     * init actual del objeto
     */
    init = { ...api.defaultInit };

    /**objeto para el cuerpo de la peticion cuando corresponda */
    body = {};

    /**
     * uri para la query
     */
    apiUrl = "";

    /**
     * se guardara la respuesta del objeto
     */
    response = {};

    /**
     * se agrega una key y valor a los parametros de la peticion
     * @param {string} key 
     * @param {*} value 
     */
    addData(key, value) {
        this.body = {};
        this.body[key] = value;
    }

    /**
     * 
     * la uri de la query para la api
     * @param {string} apiUrl 
     */
    addApiUrl(apiUrl) {
        this.apiUrl = apiUrl;
    }

    /**
     * @param {cambiar la url por defecto} newUrl 
     */
    addUrl(newUrl = "") {
        this.url = newUrl;
    }

    /**
     * se suman propiedades al init por defecto
     * no agrega el body con este metodo
     * @param {object} initOptions 
     */
    addInit(initOptions = {}) {
        for (const key in initOptions) {
            if (initOptions.hasOwnProperty(key)) {
                this.init[key] = initOptions[key];

            }
        }
    }

    /**
     * se agrega un objeto para el body, se stringifica xd y se agrega al init
     * @param {object} body 
     */
    addBody(body = {}) {
        this.body = JSON.stringify(body);
    }


    /**
     * se limpia el objeto, preparandolo para otra peticion
     */
    __cleanObject() {
        this.body = {};
        this.apiUrl = "";
        this.response = {};
        this.init = { ...api.defaultInit };

    }

    /**
     * el objeto ejecuta la peticion
     */
    __peticion() {

        this.response = fetch(this.url + this.apiUrl, this.init)
            .then(res => res.json())
            .catch(error => console.error('Error' + error))
            .then(response => {
                return response;
            });


        return this.response;
    }

    get() {
        this.init = 'GET';
        let resp = this.__peticion();
        this.__cleanObject();
        return resp;

    }

    post(data = {}) {
        this.init = 'POST';
        this.addBody(data)
        let resp = this.__peticion();
        this.__cleanObject();
        return resp;

    }

    put(data = {}) {
        this.init = 'PUT';
        this.addBody(data)
        let resp = this.__peticion();
        this.__cleanObject();

        return resp;

    }

    patch(data = {}) {
        this.init = 'PATCH';
        this.addBody(data)
        let resp = this.__peticion();
        this.__cleanObject();

        return resp;

    }

    delete() {
        this.init = 'DELETE';
        let resp = this.__peticion();
        this.__cleanObject();
        return resp;
    }

}

let Api = new api();
