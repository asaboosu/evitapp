import CoreController from '../../Core/CoreController';
import { BillModel } from './../Model/BillModel';

class billController  extends CoreController{

    ver ( id ) {
        return BillModel.getBillById( id );

    }

    buscar ( año, mes ) {
        return BillModel.getBillsByDate( año, mes );

    }
}

export let BillController = new billController();