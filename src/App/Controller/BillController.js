import CoreController from '../../Core/CoreController';
import BillModel from './../Model/BillModel';

class billController extends CoreController {

    constructor(){
        this.loadModel(new BillModel());
    }

    getBillById(id) {
        return this.models.BillModel.getBillById(id);

    }

    getBillsByDate(año, mes) {
        return this.models.BillModel.getBillByDate(año, mes);

    }
}

export let BillController = new billController();