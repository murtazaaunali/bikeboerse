import { Component } from '@angular/core';

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
    constructor() { }

}
