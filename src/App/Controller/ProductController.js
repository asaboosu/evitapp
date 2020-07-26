import CoreController from "../../Core/CoreController";
import ProductModel from '../Model/ProductModel'

class productController extends CoreController{

    getProductsByCat ( category = "" ) {
        let resp = {
            result: false,
            text: "No se ha podido conectar al sevidor"
        };

        if ( category !== "" )
        {
            try
            {
                resp = ProductModel.getProductsByCat( category );

            } catch ( error )
            {

            }
        }
        return resp;
    }

    newProducts ( products = [] ) {

        let resp = {
            result: false,
            text: "No se ha podido conectar al servidor."
        };


        switch ( true )
        {
            case ( products.length === 0 ):
                resp.text = "No se han agregado products.";
                break;
            default:
                let pet = ProductModel.addProducts( products );
                resp = pet;
                break;
        }
        return resp;
    }

    modProduct ( oldProduct, newProduct ) {
        return ProductModel.modProduct( oldProduct, newProduct );

    }

    delProduct ( product ) {

        return ProductModel.delProduct( product );

    }

    getCategorys () {
        return ProductModel.getCategory();
    }
}

export let ProductController = new productController();