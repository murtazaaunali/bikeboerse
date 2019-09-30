import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { CategoriesService } from './../services/categories.service';
import { ProductModel } from '../models/product-model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
    public splitPaneState: boolean = false;
    public categoryId: number = 0;
    products: ProductModel[];
    constructor(private productsService: ProductsService, private categoriesService: CategoriesService, private route: ActivatedRoute) {
        this.categoryId = parseInt(this.route.snapshot.paramMap.get('categoryid'));
        
        this.productsService.getProductsByCategory(this.categoryId).subscribe(products => {
            this.products = products.records;
            console.log(this.products);
        });
    }

    openFilter() {
        if (this.splitPaneState == false) {
            this.splitPaneState = true;
        } else {
            this.splitPaneState = false;
        }
        console.log(this.splitPaneState);
    }

    ngOnInit() {
    }

}
