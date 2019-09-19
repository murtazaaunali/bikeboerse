export class ProductModel {
    id: number;
    title: string;
    desc: string;
    price: number;
    filename: number;
    user: number;
    picture: number;

    constructor(values: Object = {}) {

        Object.assign(this, values);

    }

}
