export default class ProductDto {

    id;

    name;

    type;

    category;

    price;


    /**
     * 
     * 
     * 
     * @param {int} id 
     * @param {string} name 
     * @param {string} type 
     * @param {string} category 
     * @param {int} price 
     */
    constructor(id, name, type, category, price) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.category = category;
        this.price = price;
    }


}