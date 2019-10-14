import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'video-carousel',
    templateUrl: './video-carousel.component.html',
    styleUrls: ['./video-carousel.component.scss'],
})
export class VideoCarouselComponent implements OnInit {

    _videos: any;
    _heading: string;
    
    slideOpts3: any = {
        slidesPerView: 1
    };
    constructor() { }

    ngOnInit() { }

    @Input()
    set videos(videos: any) {
        this._videos = videos;
    }
    
    @Input()
    set heading(heading: any) {
        this._heading = heading;
    }

}
