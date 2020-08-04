

export default class CompraDTO {
    
    id;

    time;

    date;

    total;

    discounts;

    details;

    state;


    /**
    * Compra creada en el cliente
    * 
    * @param {String} time
    * @param {int} total
    * @param {Array<DetailDto>} details
     * @param {boolean} state
    * 
    */
    constructor(time, total, details, state) {
        this.time = time;
        this.total = total;
        this.details = details;
        this.state = state;

    }

    /**
     * Compra obtenida desde api
     * 
     * @param {String} id 
     * @param {String} time 
     * @param {int} total 
     * @param {Array<OfertaDto>} discounts 
     * @param {Array<DetailDto>} details
     * @param {boolean} state
     */
    constructor(id, time, total, discounts, details, state) {
        this.id = id;
        this.time = time;
        this.total = total;
        this.discounts = discounts;
        this.details = details;
        this.state = state;

    }


}