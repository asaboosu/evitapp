import CoreController from '../../Core/CoreController';
import OrderDto from '../Model/Dto/OrderDto';
import OrderModel from '../Model/OrderModel';

class orderController extends CoreController {

    constructor(){
        this.loadModel(new OrderModel());
    }

    getOrderById(id) {
        return true;
    }

    getOrderByCompleted() {
        return true;

    }

    getOrderByNotCompleted() {
        return true;
    }

    newOrder(products) {
        let Order = new OrderDto(products);
        return true;
    }

    modOrder(newOrder, oldOrder) {
        return true;
    }

    delOrder(idOrder) {
        return true;
    }

    completeOrder(idOrder) {
        return true;
    }

    doneOrder(idOrder) {
        return true;

    }


}
export let OrderController = new orderController();