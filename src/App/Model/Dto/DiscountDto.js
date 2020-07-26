export default class OfertaDTO {

    codigo;

    detalles;

    tipo;

    total;

    /**
     * Oferta creada en el cliente
     * 
     * @param {Array<DetalleDTO>} detalles
     * @param {int} total 
     * @param {String} tipo 
     */
    constructor(detalles, total, tipo) {
        this.total = total;
        this.total = tipo;
        this.total = detalles;
    }


    /**
     * Oferta creada en la api
     *
     * @param {Array<DetalleDTO>} detalles
     * @param {int} total
     * @param {String} tipo
     */
    constructor(codigo, detalles, total, tipo) {
        this.codigo = codigo;
        this.total = total;
        this.total = tipo;
        this.total = detalles;
    }

}