export class Category {
    id: number;
    subtitle: string;
    title: string;
    filename: string;

    constructor(values: Object = {}) {

        Object.assign(this, values);

    }
}
