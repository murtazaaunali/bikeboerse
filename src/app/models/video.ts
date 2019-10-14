export class Video {
    id: number;
    desc: string;
    title: string;
    user: string;
    video: string;
    video_thumb: string;

    constructor(values: Object = {}) {

        Object.assign(this, values);

    }
}
