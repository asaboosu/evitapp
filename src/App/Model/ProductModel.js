import CoreModel from "../../Core/CoreModel";

export default class ProductModel extends CoreModel {

    getProductsByCat(product,page) {
        this.api.addApiUrl("/product/getByCat/" + product.category + "/page/" + page );
        let resp = this.api.get();
        return resp;

    }

    getProductByCod(product,page) {
        this.api.addApiUrl("/product/getByCod/" + product.code + "/page/" + page );
        let resp = this.api.get();
        return resp;

    }

    getProductByType(product,page) {
        this.api.addApiUrl("/product/getByType/" + product.type + "/page/" + page);
        this.api.get();
        return resp;

    }

    newProduct(product) {
        this.api.addApiUrl('/product/create');
        let resp = this.api.post();
        return resp;
    }

    newProducts(arrayProducts) {
        this.api.addApiUrl('/product/createByArray');
        this.api.addBody(arrayProducts);
        let resp = this.api.post();
        return resp;
    }

    modProduct(oldProduct, newProduct) {
        this.api.addApiUrl("/product/" + oldProduct.id);
        this.api.addBody({
            old: oldProduct,
            new: newProduct
        });
        let resp = this.api.put();
        return resp;

    }

    delProduct(product){
        this.api.addApiUrl("/product/" + product.id);


    }

}
