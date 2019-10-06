import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'account-userinfo',
    templateUrl: './account-userinfo.component.html',
    styleUrls: ['./account-userinfo.component.scss'],
})
export class AccountUserinfoComponent implements OnInit {
    user_info: any;
    constructor(private storage: Storage) {
        this.storage.get('USER_INFO').then((response) => {
            this.user_info = response;
            console.log(response);
        });
    }

    ngOnInit() { }

}
