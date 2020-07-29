import CoreModel from "../../Core/CoreModel";

export default class OrderModel extends CoreModel {

    getOrdersById(order) {
        this.api.addApiUrl("/order/id/" + order.id);
        return this.api.get();
    }

    getOrdersByType(order) {
        this.api.addApiUrl("/order/type/" + order.type);
        return this.api.get();
    }

    getOrdersByState(order){
        this.api.addApiUrl("/order/state/" + order.state);
        return this.api.get();
    }

    newOrder(order) {
        this.api.addApiUrl("/order");
        this.api.addBody(order);
        return this.api.post();

    }

    modOrder(newOrder, OldOrder) {
        this.api.addApiUrl("/order");
        this.api.addBody({
            newOrder: newOrder,
            OldOrder: OldOrder
        })
        return this.api.put();
    }

    delOrder(order) {
        this.api.addApiUrl("/order/id/" + order.id);
        return this.api.delete();
    }

}
