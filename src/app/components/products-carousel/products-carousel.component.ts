import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'products-carousel',
    templateUrl: './products-carousel.component.html',
    styleUrls: ['./products-carousel.component.scss'],
})
export class ProductsCarouselComponent implements OnInit {

    _products: any;
    _size: number;
    _heading: string;
    loaded: any;

    slideOpts: any = {
        slidesPerView: 3
    };
    slideOpts1: any = {
        slidesPerView: 1,
        autoplay: true
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
    set products(products: any) {
        this._products = products;
    }

    @Input()
    set heading(heading: string) {
        this._heading = heading;
    }

    @Input()
    set size(size: number) {
        this._size = size;
    }

}
