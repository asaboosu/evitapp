import CoreModel from "../../Core/CoreModel";

export default class ProductModel extends CoreModel {

    getProductsByCat(product,page) {
        this.api.addApiUrl("/product/category/" + product.category + "/page/" + page );
        return this.api.get();

    }

    getProductsByCod(product,page) {
        this.api.addApiUrl("/product/id/" + product.id + "/page/" + page );
        return this.api.get();

    }

    getProducstByType(product,page) {
        this.api.addApiUrl("/product/type/" + product.type + "/page/" + page );
        return this.api.get();

    }

    getProductsByDiscountId(discount){
        this.api.addApiUrl("/product/discount/id/" + discount.id + "/page/" + page );
        return this.api.get();
    }

    newProduct(product) {
        this.api.addApiUrl('/product');
        this.api.addBody(product);
        return this.api.post();
    }

    newProducts(arrayProducts) {
        this.api.addApiUrl('/product' );
        this.api.addBody(arrayProducts);
        return this.api.post();
    }

    modProduct(newProduct, oldProduct) {
        this.api.addApiUrl("/product" );
        this.api.addBody({
            new: newProduct,
            old: oldProduct
        });
        return this.api.put();
    }

    delProduct(product){
        this.api.addApiUrl("/product/id/" + product.id );
        return this.api.delete();
    }



}
