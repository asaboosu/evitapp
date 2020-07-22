export default class ProductoDTO {

    codigo;

    nombre;

    tipo;

    categoria;

    precio;


    /**
     * 
     * 
     * 
     * @param {int} codigo 
     * @param {string} nombre 
     * @param {string} tipo 
     * @param {string} categoria 
     * @param {int} precio 
     */
    constructor(codigo, nombre, tipo, categoria, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.tipo = tipo;
        this.categoria = categoria;
        this.precio = precio;
    }


}