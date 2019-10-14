import { Component, OnInit } from '@angular/core';
import { VideosService } from './../services/videos.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.page.html',
    styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
    public splitPaneState: boolean = false;

    videos: any;
    data: any;
    errorMessage: string;
    page = 1;
    perPage = 10;
    totalData = 0;
    totalPage = 0;

    constructor(private videosService: VideosService, private youtube: YoutubeVideoPlayer) {
        /* this.videosService.getVideos().subscribe(videos => {
            this.videos = videos['records'];
            console.log(this.videos);
        }); */
        this.getVideos();
    }

    doInfinite(infiniteScroll) {
        this.page = this.page + 1;
        setTimeout(() => {
            this.videosService.getVideos().subscribe(videos => {
                this.data = videos;
                this.perPage = 10;
                this.totalData = this.data['records'];
                this.totalPage = this.data['records'].length;
                console.log(this.data['records'].length);
                for (let i = 0; i < this.data['records'].length; i++) {
                    this.videos.push(this.data['records'][i]);
                }
            },
                error => this.errorMessage = <any> error);
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    }

    getVideos() {
        this.videosService.getVideos()
            .subscribe(
                videos => {
                    this.totalData = videos['records'].length;
                    this.totalPage = Math.round(videos['records'].length / this.perPage);
                    for (let i = 0; i < 10; i++) {
                        this.data.push(videos['records'][i]);
                    }
                    
                },
                error => this.errorMessage = <any> error);
    }

    openMenu() {
        if (this.splitPaneState == false) {
            this.splitPaneState = true;
        } else {
            this.splitPaneState = false;
        }
        console.log(this.splitPaneState);
    }

    openVideo(video_id) {
        console.log();
        this.youtube.openVideo(video_id);
    }

    ngOnInit() {
    }

}
