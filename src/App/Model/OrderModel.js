import CoreModel from "../../Core/CoreModel";

export default class OrderModel extends CoreModel {

    getOrderById(id) {
        this.api.addApiUrl("/order/id/" + order.id);
        return this.api.get();
    }

    getOrdersByType() {
        this.api.addApiUrl("/order/type/" + order.id);
        return this.api.get();
    }

    addOrder(order) {
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

    }

    payOrder(order) {

    }

    endOrder(order) {

    }
}
