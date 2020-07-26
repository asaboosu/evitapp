import CoreController from '../../Core/CoreController';
import { BillModel } from './../Model/BillModel';

class billController extends CoreController {

    getBillById(id) {
        return BillModel.getBillById(id);

    }

    getBillsByDate(año, mes) {
        return BillModel.getBillsByDate(año, mes);

    }
}

export let BillController = new billController();