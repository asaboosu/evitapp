import CoreModel from "../../Core/CoreModel";

export default class ProductModel extends CoreModel {

    getProductsByCat(product) {
        this.api.addApiUrl('/product/getByCat/' + product.cat);
        let resp = this.api.get();
        return resp;

    }

    getProductByCod(product) {
        this.api.addApiUrl('/product/getByCod/' + product.cod);
        let resp = this.api.get();
        return resp;

    }

    getProductByType(product) {
        this.api.addApiUrl('/product/getByType/' + product.type);
        let resp = this.api.get();
        return resp;

    }

    crearProduct(product){
        this.api.addApiUrl('/product/create' );
        this.api.addBody(product);
        let resp = this.api.post();
    }

    crearProducts(arrayProducts){
        this.api.addApiUrl('/product/createByArray');
        this.api.addBody(arrayProducts);
        let resp = this.api.post();
    }

    modProduct(oldProduct, newProduct){
        this.api.addApiUrl('/product/modify');
        this.api.addBody({
            old: oldProduct,
            new: newProduct
        });

    }
}
