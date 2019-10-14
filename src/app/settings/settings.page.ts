import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(private iab: InAppBrowser) { }

    openNotifications() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');

    }

    openDataProtection() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');

    }

    openTermsofUse() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');

    }

    openCopyrights() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');

    }

    openHelp() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');

    }

    openReportFault() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');

    }
    ngOnInit() {
    }

}
