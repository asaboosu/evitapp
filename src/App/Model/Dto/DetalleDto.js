export default class DetalleDTO {

    producto;

    cantidad;

    total;

    /**
     * 
     * 
     * 
     * @param {Object} producto 
     * @param {int} cantidad 
     * @param {int} total 
     */
    constructor(producto, cantidad, total) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.total = total;
    }

}