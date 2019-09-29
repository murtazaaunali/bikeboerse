import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.page.html',
    styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
    public splitPaneState: boolean = false;
    constructor() { }
    openMenu() {
        if (this.splitPaneState == false) {
            this.splitPaneState = true;
        } else {
            this.splitPaneState = false;
        }
        console.log(this.splitPaneState);

        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        console.log('product id:' + this.id);
    }

    ngOnInit() {
    }

}
