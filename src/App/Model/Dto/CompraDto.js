

export default class CompraDTO {
    
    id;

    time;

    date;

    total;

    discounts;

    details;

    completed;



    /**
    * Compra creada en el cliente
    * 
    * @param {String} time
    * @param {int} total
    * @param {Array<DetalleDTO>} details
    */
    constructor(time, total, details) {
        this.time = time;
        this.total = total;
        this.details = details;

    }

    /**
     * Compra obtenida desde api
     * 
     * @param {String} id 
     * @param {String} time 
     * @param {int} total 
     * @param {Array<OfertaDTO>} discounts 
     * @param {Array<DetalleDTO>} details
     * @param {boolean} completed
     */
    constructor(id, time, total, discounts, details, completed) {
        this.id = id;
        this.time = time;
        this.total = total;
        this.discounts = discounts;
        this.details = details;
        this.completed = completed;

    }


}