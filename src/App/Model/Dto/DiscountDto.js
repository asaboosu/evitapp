export default class OfertaDTO {

    id;

    details;

    type;

    total;

    /**
     * Oferta creada en el cliente
     * 
     * @param {Array<DetailDto>} details
     * @param {int} total 
     * @param {String} type 
     */
    constructor(details, total, type) {
        this.total = total;
        this.total = type;
        this.total = details;
    }


    /**
     * Oferta creada en la api
     *
     * @param {Array<DetailDto>} details
     * @param {int} total
     * @param {String} type
     */
    constructor(id, details, total, type) {
        this.id = id;
        this.total = total;
        this.total = type;
        this.total = details;
    }

}