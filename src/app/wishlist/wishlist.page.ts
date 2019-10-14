import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { Storage } from '@ionic/storage';
import { ProductModel } from '../models/product-model';

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.page.html',
    styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

    products: ProductModel[];

    constructor(private productsService: ProductsService, private storage: Storage) {
        this.storage.get('USER_INFO').then((response) => {
            this.productsService.getProductsByUserWatchlist(response.id).subscribe(products => {
                this.products = products.records;
            });
        });

    }

    ngOnInit() {
    }

}
