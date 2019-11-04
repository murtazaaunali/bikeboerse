import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {

    _showBack = true;
    constructor() { }

    @Input()
    set showBack(showBack) {
        this._showBack = showBack;
    }

    ngOnInit() { }

}
