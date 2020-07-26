import CoreController from '../../Core/CoreController';
import { OrderModel } from '../Model/OrderModel';

class orderController extends CoreController{

    getOrderById ( id ) {
        return OrderModel.getOrderById( id );
    }

    getOrderByCompleted () {
        return OrderModel.getOrdersByType( "completada" );

    }

    getOrderByNotCompleted () {
        return OrderModel.getOrdersByType( "proceso" );
    }

    newOrder ( products ) {
        let Order = new OrderDto(products);
        return OrderModel.addOrder( Order );
    }

    modOrder ( newOrder, oldOrder ) {
        return OrderModel.modOrder( newOrder, oldOrder );
    }

    delOrder ( idOrder ) {
        return OrderModel.delOrder( idOrder );
    }

    completeOrder ( idOrder ) {
        return OrderModel.doneOrder();
    }

    doneOrder(idOrder){
        return OrderModel.endOrder();

    }


}
export let OrderController = new orderController();