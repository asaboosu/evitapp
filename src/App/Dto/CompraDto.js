

export default class CompraDTO {
    
    id;

    hora;

    fecha;

    total;

    ofertas;

    detalles;

    completada;



    /**
    * Compra creada en el cliente
    * 
    * @param {String} hora
    * @param {int} total
    * @param {Array<DetalleDTO>} detalles
    */
    constructor(hora, total, detalles) {
        this.hora = hora;
        this.total = total;
        this.detalles = detalles;

    }

    /**
     * Compra obtenida desde api
     * 
     * @param {String} id 
     * @param {String} hora 
     * @param {int} total 
     * @param {Array<OfertaDTO>} ofertas 
     * @param {Array<DetalleDTO>} detalles
     * @param {boolean} completada
     */
    constructor(id, hora, total, ofertas, detalles, completada) {
        this.id = id;
        this.hora = hora;
        this.total = total;
        this.ofertas = ofertas;
        this.detalles = detalles;
        this.completada = completada;

    }


}