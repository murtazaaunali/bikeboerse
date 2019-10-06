import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { Storage } from '@ionic/storage';
import { ProductModel } from '../models/product-model';

@Component({
    selector: 'app-my-products',
    templateUrl: './my-products.page.html',
    styleUrls: ['./my-products.page.scss'],
})
export class MyProductsPage implements OnInit {

    products: ProductModel[];

    constructor(private productsService: ProductsService, private storage: Storage) {
        this.storage.get('USER_INFO').then((response) => {
            this.productsService.getProductsByUser(response.id).subscribe(products => {
                this.products = products.records;
            });
        });

    }

    ngOnInit() {
    }

}
