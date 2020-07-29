import CoreModel from "../../Core/CoreModel";

export default class DiscountModel extends CoreModel {

    getDiscountById(discount) {
        this.api.addApiUrl("/discount/id/" + discount.id);
        return this.api.get();
     }

    getDiscountsByType(discount) {
        this.api.addApiUrl("/discount/type/" + discount.type);
        return discount;
     }

    newDiscount(discount) {
        this.api.addApiUrl("/discount");
        this.api.addBody(discount);
        return this.api.post();
     }

    modDiscount(newDiscount, oldDiscount) {
        this.api.addApiUrl("/discount/id/" + oldDiscount.id);
        this.api.addBody(newDiscount);
        return this.api.put();
     }

    delDiscount(discount) { 
        this.api.addApiUrl("/product/id/" + discount.id );
        return this.api.delete();
    }

}