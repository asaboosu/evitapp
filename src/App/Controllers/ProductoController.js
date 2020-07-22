import CoreController from "../../Core/CoreController";
import { ProductoModel } from '../Model/ProductoModel';

class productoController extends CoreController {


    ver ( categoria = "" ) {

        let resp = {
            resultado: false,
            texto: "No se ha podido conectar al sevidor"
        };

        if ( categoria !== "" )
        {
            try
            {
                resp = ProductoModel.getProductosByCat( categoria );

            } catch ( error )
            {

            }
        }

        return resp;


    }

    buscar ( query, tipoQuery ) {
        return true;
    }

    agregar ( productos = [] ) {

        let resp = {
            resultado: false,
            texto: "No se ha podido conectar al servidor."
        };


        switch ( true )
        {
            case ( productos.length === 0 ):
                resp.texto = "No se han agregado productos.";
                break;
            default:
                let pet = ProductoModel.addProductos( productos );
                resp = pet;
                break;
        }
        return resp;
    }

    modificar ( codigoAntiguo, productoNuevo ) {
        return ProductoModel.modProducto( codigoAntiguo, productoNuevo );

    }

    eliminar ( codigo ) {

        return ProductoModel.delProducto( codigo );

    }

    getCategorias () {
        let result = ProductoModel.getCategorias();
        return result;

    }
}

export let ProductoController = new productoController();