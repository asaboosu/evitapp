import { FacturaModel } from './../Model/FacturaModel';

class facturaController {

    ver ( id ) {
        return FacturaModel.getFacturaById( id );

    }

    buscar ( año, mes ) {
        return FacturaModel.getFacturasByDate( año, mes );

    }
}

export let FacturaController = new facturaController();