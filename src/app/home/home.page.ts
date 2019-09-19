import { Component } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { ProductModel } from '../models/product-model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    slideOpts: any = {
        slidesPerView: 3,
        paginationType: 'progress'
    };
    products: ProductModel[];

    constructor(private productsService: ProductsService) {
        this.productsService.getProducts().subscribe(products => {
            this.products = products.records;
            console.log(this.products);
        });

    }

}
