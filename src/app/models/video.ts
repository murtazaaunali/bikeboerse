import { DomSanitizer } from '@angular/platform-browser';

export class Video {
    id: number;
    desc: string;
    title: string;
    user: string;
    video: string;
    category: string;
    brand: string;
    size: string;
    video_id: string;
    video_url: string;
    online_from: string;
    video_thumb: string;

    constructor(values: Object = {}, private sanitizer: DomSanitizer) {
        Object.assign(this.video_url, sanitizer.bypassSecurityTrustUrl("Hello World"));
        Object.assign(this, values);
    }
}
