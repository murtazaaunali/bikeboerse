import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
    selector: 'app-video',
    templateUrl: './video.page.html',
    styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
    video_id: string;
    constructor(private route: ActivatedRoute, private youtube: YoutubeVideoPlayer) {
        this.video_id = this.route.snapshot.paramMap.get('id');
        console.log("Video ID: " + this.video_id)

    }
    ngOnInit() {
        if (this.video_id) {
            this.youtube.openVideo(this.video_id);
        }
    }

}
