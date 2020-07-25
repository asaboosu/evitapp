import { CompraModel } from './../Model/CompraModel';

class compraController {

    ver ( id ) {

        return CompraModel.getCompraById( id );
    }

    verCompletadas () {
        return CompraModel.getComprasByTipo( "completada" );

    }

    verProceso () {
        return CompraModel.getComprasByTipo( "proceso" );
    }

    nueva ( productos ) {
        return CompraModel.addCompra( productos );
    }

    modificar ( idCompra, productos ) {
        return CompraModel.modCompra( idCompra, productos );
    }

    eliminar ( idCompra ) {
        return CompraModel.delCompra( idCompra );
    }

    completar ( idCompra ) {
        return CompraModel.doneCompra();
    }


}
export let CompraController = new compraController();