import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from './../services/products.service';
import { ProductModel } from '../models/product-model';

@Component({
    selector: 'app-product',
    templateUrl: './product.page.html',
    styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
    id: number;
    title: string;
    price: number;
    paypal: number;
    pickup: number;
    brand: string;
    size: number;
    fork: string;
    user: string;
    images: any;
    baseprice: number;
    desc: any;

    product: ProductModel[];
    constructor(private route: ActivatedRoute, private productService: ProductsService) {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log('product id:' + this.id);

        this.productService.getProduct(this.id).subscribe(product => {
            console.log(product);
            this.title = product.title;
            this.price = product.price;
            this.paypal = product.paypal;
            this.pickup = product.pickup;
            this.brand = product.brand;
            this.size = product.size;
            this.fork = product.fork;
            this.user = product.user;
            this.images = product.filename;
            this.desc = product.desc;
            this.baseprice = product.baseprice;
        });
    }

    ngOnInit() { }
}
