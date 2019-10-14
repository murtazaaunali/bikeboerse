import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'categories-carousel',
    templateUrl: './categories-carousel.component.html',
    styleUrls: ['./categories-carousel.component.scss'],
})
export class CategoriesCarouselComponent implements OnInit {
    _categories: any;
    _heading: string;

    slideOpts: any = {
        slidesPerView: 3
    };
    slideOpts2: any = {
        slidesPerView: 2
    };
    slideOpts3: any = {
        slidesPerView: 1
    };

    constructor() { }

    ngOnInit() { }

    @Input()
    set categories(categories: any) {
        // Here you can do what you want with the variable
        this._categories = categories;
    }

    @Input()
    set heading(heading: string) {
        // Here you can do what you want with the variable
        this._heading = heading;
    }

    missingImage(missingImgUrl) {
        console.log(missingImgUrl)
    }
}
