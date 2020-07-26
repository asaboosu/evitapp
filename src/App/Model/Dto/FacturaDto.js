
export default class FacturaDto {
    
    id;

    hora;

    fecha;

    total;

    ofertas;

    detalles;



    /**
     * Factura creada en el cliente
     * @param {string} fecha 
     */
    constructor(fecha) {
        this.fecha = fecha;

    }

    /**
     * Factura obtenida desde api
     * 
     * @param {String} id 
     * @param {String} hora 
     * @param {int} total 
     * @param {Array<OfertaDTO>} ofertas 
     * @param {Array<DetalleDTO>} detalles
     * 
     */
    constructor(id, hora, fecha, total, ofertas, detalles) {
        this.id = id;
        this.fecha = fecha;
        this.hora = hora;
        this.total = total;
        this.ofertas = ofertas;
        this.detalles = detalles;

    }


}