import CoreController from "../../Core/CoreController";
import { FacturaModel } from './../Model/FacturaModel';

class facturaController extends CoreController {

    ver ( id ) {
        return FacturaModel.getFacturaById( id );

    }

    buscar ( año, mes ) {
        return FacturaModel.getFacturasByDate( año, mes );

    }
}

export let FacturaController = new facturaController();