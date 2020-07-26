export default class DetalleDTO {

    product;

    amount;

    total;

    /**
     * 
     * 
     * 
     * @param {ProductDto} product 
     * @param {int} amount 
     * @param {int} total 
     */
    constructor(product, amount, total) {
        this.product = product;
        this.amount = amount;
        this.total = total;
    }

}