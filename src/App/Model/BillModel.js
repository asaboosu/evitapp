import CoreModel from "../../Core/CoreModel";

export default class OrderModel extends CoreModel {

    getBillById(order) {
        this.api.addApiUrl("/order/id/" + order.id);
        return this.api.get();
    }

    getBillsByDate(order){
        this.api.addApiUrl('/order/date/${order.date}');
        return this.api.get();
    }


}
