import CoreModel from './../../Core/CoreModel';

class productoModel extends CoreModel {

    getProductoById ( id ) {
        return this.api.request( "producto", "ver", "POST", { id } );
    }
    getProductosByCat ( categoria ) {
        return this.api.request( "producto", "categoria", "POST", { categoria } );
    }

    getCategorias () {
        return this.api.request( "producto", "categorias" );

    }

    addProductos ( productos ) {
        return this.api.request( "producto", "agregar", "POST", { productos } );
    }

    modProducto ( idProducto, modificadoProducto ) {
        return this.api.request( "producto", "modificar", "POST", { idProducto, modificadoProducto } );

    }

    delProducto ( idProducto ) {
        return this.api.request( "producto", "eliminar", "POST", { idProducto } );

    }
}

export let ProductoModel = new productoModel();