import CoreController from "../../Core/CoreController";
import { OfertaModel } from './../Model/OfertaModel';

class ofertaController extends CoreController {

    verId ( id ) {
        return OfertaModel.getOfertaById( id );
    }

    modificar ( id, detalles ) {
        return OfertaModel.modOferta( id, detalles );
    }

    eliminar ( id ) {
        return OfertaModel.delOferta( id );
    }

    nueva ( id, detalles ) {
        return OfertaModel.addOferta( id, detalles );
    }
}
export let OfertaController = new ofertaController();
