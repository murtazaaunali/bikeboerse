import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
    public splitPaneState: boolean = false;
    constructor() { }

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
