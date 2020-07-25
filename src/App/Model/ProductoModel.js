import CoreModel from "../../Core/CoreModel";

export default class ProductoModel extends CoreModel {

    getProductosByCategoria(producto) {
        this.api.addApiUrl('/product/getByCat/' + producto.categoria);
        let resp = this.api.get();
        return resp;

    }

    getProductoByCodigo(producto) {
        this.api.addApiUrl('/product/getByCod/' + producto.codigo);
        let resp = this.api.get();
        return resp;

    }

    getProductoByTipo(producto) {
        this.api.addApiUrl('/product/getByType/' + producto.tipo);
        let resp = this.api.get();
        return resp;

    }

    postProducto(producto){
        this.api.addApiUrl('/product/create');
        this.api.addBody(producto);
        let resp 
    }

    postProductos(arrayProductos){
        this.api.addApiUrl('/product/createByArray');
        this.api.addBody(arrayProductos);
        let resp = 
    }
}
