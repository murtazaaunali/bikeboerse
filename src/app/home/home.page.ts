import { Component } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { CategoriesService } from './../services/categories.service';
import { ProductModel } from '../models/product-model';
import { VideosService } from './../services/videos.service';

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

    categories: any;

    videos: any;

    constructor(private productsService: ProductsService, private categoriesService: CategoriesService, private videosService: VideosService) {
        this.productsService.getProducts().subscribe(products => {
            this.products = products.records;
            console.log(this.products);
        });

        this.categoriesService.getCategories().subscribe(categories => {
            this.categories = categories.records;
            console.log(this.categories);
        });

        this.videosService.getVideos().subscribe(videos => {
            this.videos = videos.records;
            console.log(this.videos);
        });
    }

}
