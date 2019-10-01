import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { CategoriesService } from './../services/categories.service';
import { ProductModel } from '../models/product-model';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    searchTerm: string = "";
    products: ProductModel[];
    categories: any;
    constructor(private productsService: ProductsService, private categoriesService: CategoriesService) {
        this.categoriesService.getCategories().subscribe(categories => {
            this.categories = categories['records'];
            console.log(this.categories);
        });
    }

    setFilteredItems() {
        // add loading
        console.log(this.searchTerm.length);
        if (this.searchTerm.length > 3) {
            this.productsService.searchProducts(this.searchTerm).subscribe(products => {
                this.products = products.records;
                console.log(this.products);
            });
        }
    }

    clearResults() {
        console.log("cleared")
        this.searchTerm = "";
        this.products = null;
    }

    ngOnInit() { }

}
