import { Component, OnInit, ViewChild } from '@angular/core';
import { VideosService } from './../services/videos.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Video } from "../models/video";

@Component({
    selector: 'app-videos',
    templateUrl: './videos.page.html',
    styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
    public splitPaneState: boolean = false;
    trustedVideoUrl: SafeResourceUrl;

    videos: Video[];
    page = 0;
    maximumPages = 3;
    errorMessage: any;

    item: any;

    constructor(private videosService: VideosService, private sanitizer: DomSanitizer) {
        this.videosService.getVideos().subscribe(videos => {
            var i;
            this.videos = videos['records'];
            for (i = 0; i < this.videos.length; i++) {
                videos['records'][i]['video_url'] = sanitizer.bypassSecurityTrustResourceUrl(videos['records'][i]['video_url']);
            }
        });
    }

    openMenu() {
        if (this.splitPaneState == false) {
            this.splitPaneState = true;
        } else {
            this.splitPaneState = false;
        }
        console.log(this.splitPaneState);
    }

    delete() { }

    ngOnInit() {
    }

}
