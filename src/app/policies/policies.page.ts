import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-policies',
    templateUrl: './policies.page.html',
    styleUrls: ['./policies.page.scss'],
})
export class PoliciesPage implements OnInit {

    constructor(private iab: InAppBrowser) { }

    openNotifications() { }

    openDataProtection() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');
        browser.close();
    }

    openTermsofUse() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');
        browser.close();
    }

    openCopyrights() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');
        browser.close();
    }

    openHelp() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');
        browser.close();
    }

    openReportFault() {
        const browser = this.iab.create('https://bikeboerse.com/faq/');
        browser.close();
    }

    ngOnInit() {
    }

}
