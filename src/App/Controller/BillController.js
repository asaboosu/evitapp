import CoreController from '../../Core/CoreController';
import BillModel from './../Model/BillModel';

class billController extends CoreController {

    constructor(){
        this.loadModel(new BillModel());
    }

    getBillById(id) {
        let bills = this.models.BillModel.getBillById(id).json();

    }

    getBillsByDate(año, mes) {
        return this.models.BillModel.getBillByDate(año, mes);

    }
}

export let BillController = new billController();