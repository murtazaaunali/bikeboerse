import { Component } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { CategoriesService } from './../services/categories.service';
import { ProductModel } from '../models/product-model';
import { Category } from '../models/category';
import { Video } from '../models/video';
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
    productsSlides: ProductModel[];
    productsLatests: ProductModel[];

    categories: Category[];

    videos: Video[];

    constructor(private productsService: ProductsService, private categoriesService: CategoriesService, private videosService: VideosService) {
        
        // Get products for Slider 
        this.productsService.getProducts('0,10', 'online_from').subscribe(products => {
            this.productsSlides = products.records;
            console.log(this.productsSlides);
        });
        
        // Get latest products 
        this.productsService.getProducts('0,10', 'user').subscribe(products => {
            this.productsLatests = products.records;
            console.log(this.productsLatests);
        });

        this.categoriesService.getCategories().subscribe(categories => {
            this.categories = categories['records'];
            console.log(this.categories);
        });

        this.videosService.getVideos().subscribe(videos => {
            this.videos = videos['records'];
            console.log(this.videos);
        });
    }

}
