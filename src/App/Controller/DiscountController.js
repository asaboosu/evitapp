import CoreController from '../../Core/CoreController';
import  DiscountModel from '../Model/DiscountModel';

class discountController extends CoreController {

    constructor(){
        this.loadModel(new DiscountModel());
    }
    
    getDiscountById(id) {
        return this.models.DiscountModel.getDiscountById(id);
    }

    modDiscount(id, details) {
        return this.models.DiscountModel.modDiscount(id, details);
    }

    delDiscount(id) {
        return this.models.DiscountModel.delDiscount(id);
    }

    newDiscount(id, details) {
        return this.models.DiscountModel.newDiscount(id, details);
    }
}
export let DiscountController = new discountController();
