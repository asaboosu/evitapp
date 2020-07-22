 class coreApi {

    host = "www.fakeapi.online/api/apis/xddd";

    port = window.location.port;

    protocol = "https";

    hostAlive = false;


    constructor ( conf = null ) {
        if ( conf !== null )
        {
            this.host = conf.host;
            this.port = conf.port;
            this.protocol = conf.protocol;

        }

    
    }
    /**
     * Se realiza una peticion
     * Devuelve un objeto con los resultados en succes
     * En error devuelve el codigo de status
     * @return {}
     */
    async request ( controlador = "", accion = "", type = "GET", data = { default: true } ) 
    {
        let initConf = { ...this.defaultInitConf };
        let url = `${ this.protocol }://${ this.host }/${ controlador }/${ accion }`;
        if ( type === "POST" && data !== null )
        {
            initConf.method = "POST";
            initConf.body = JSON.stringify( data );
        }

        const response = await fetch( url, initConf ).then( resp => {
            if ( resp.ok )
            {
                return resp.json();
            } else
            {
                return resp.status;
            }
        } ).catch( err => console.log( err ) );

        return response;
    }
}


 export let CoreApi = new coreApi();