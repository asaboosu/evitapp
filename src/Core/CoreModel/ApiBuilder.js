/**
 * clase para api rest
 */
export default class CoreApi {

    /**
     * url base
     */
    static defaultUrl = 'https://www.fakeapi.online/api/apis/asd/';


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

    url = { ...CoreApi.defaultUrl };
    /**
     * init actual del objeto
     */
    init = { ...CoreApi.defaultInit };

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
      * se limpia el objeto, preparandolo para otra peticion
      */
    __cleanObject() {
        this.body = {};
        this.apiUrl = { ...CoreApi.defaultUrl };
        this.response = {};
        this.init = { ...CoreApi.defaultInit };

    }

    /**
     * el objeto ejecuta la peticion
     */
    __petition() {

        this.response = fetch(this.url + this.apiUrl, this.init)
            .then(res => {
                if (300 > res.status >= 200) {
                    res.json();

                } else {
                    return res.status;
                }
            })
            .catch(error => console.error('Error' + error))
            .then(response => {
                return response;
            });


        return this.response;
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
     * se agrega un objeto para el body, se stringifica xd y se agrega al init
     * @param {object} body 
     */
    addBody(body = {}) {
        this.body = JSON.stringify(body);
    }




    get() {
        this.init = 'GET';
        let resp = this.__peticion();
        this.__cleanObject();
        return resp;

    }

    post(data = {}) {
        this.init = 'POST';
        this.addBody(data);
        let resp = this.__peticion();
        this.__cleanObject();
        return resp;

    }

    put(data = {}) {
        this.init = 'PUT';
        this.addBody(data);
        let resp = this.__peticion();
        this.__cleanObject();

        return resp;

    }

    patch(data = {}) {
        this.init = 'PATCH';
        this.addBody(data);
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