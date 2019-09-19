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
        slidesPerView: 3
    };
    slideOpts2: any = {
        slidesPerView: 2
    };
    slideOpts3: any = {
        slidesPerView: 1
    };
    products: ProductModel[];

    constructor(private productsService: ProductsService) {
        this.productsService.getProducts().subscribe(products => {
            this.products = products.records;
            console.log(this.products);
        });

    }

}
