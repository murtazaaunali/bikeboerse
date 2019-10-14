import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    _products: any;

    @Input()
    set products(products: any) {
        // Here you can do what you want with the variable
        this._products = products;
    }

}
