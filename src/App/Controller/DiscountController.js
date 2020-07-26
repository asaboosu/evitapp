import CoreController from '../../Core/CoreController';
import { DiscountModel } from '../Model/DiscountModel';

class discountController extends CoreController {

    getDiscountById(id) {
        return DiscountModel.getDiscountById(id);
    }

    modDiscount(id, details) {
        return DiscountModel.modDiscount(id, details);
    }

    delDiscount(id) {
        return DiscountModel.delDiscount(id);
    }

    newDiscount(id, details) {
        return DiscountModel.newDiscount(id, details);
    }
}
export let DiscountController = new discountController();
