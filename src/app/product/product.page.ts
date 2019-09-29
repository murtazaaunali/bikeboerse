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
    product: ProductModel[];
    constructor(private route: ActivatedRoute, private productService: ProductsService) {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log('product id:' + this.id);
        ;

        this.productService.getProduct(this.id).subscribe(products => {
            this.product = products.records;
            console.log(this.product);
        });
    }
    ngOnInit() { }
}
