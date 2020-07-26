import CoreController from '../../Core/CoreController';
import { DiscountModel } from '../Model/DiscountModel';

class discountController  extends CoreController{

    verId ( id ) {
        return DiscountModel.getDiscountById( id );
    }

    modificar ( id, details ) {
        return DiscountModel.modDiscount( id, details );
    }

    eliminar ( id ) {
        return DiscountModel.delDiscount( id );
    }

    nueva ( id, details ) {
        return DiscountModel.addDiscount( id, details );
    }
}
export let DiscountController = new discountController();
