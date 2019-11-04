import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
    selector: 'app-video',
    templateUrl: './video.page.html',
    styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
    video_id: string;
    trustedVideoUrl: SafeResourceUrl;
    constructor(private route: ActivatedRoute, private domSanitizer: DomSanitizer, private screenOrientation: ScreenOrientation) {
        this.video_id = this.route.snapshot.paramMap.get('id');
        console.log("Video ID: " + this.video_id);

        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/" + this.video_id);
    }
    ngOnInit() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    }

    ngOnDestroy() {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }

}
