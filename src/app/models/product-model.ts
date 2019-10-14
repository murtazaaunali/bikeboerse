export class ProductModel {
    id: number;
    title: string;
    desc: string;
    price: number;
    filename: number;
    user: number;
    picture: number;
    size: string;
    category_name: string;
    paypal: number;
    pickup: number;
    brand: string;
    fork: string;
    baseprice: string;

    constructor(values: Object = {}) {

        Object.assign(this, values);

    }

}
