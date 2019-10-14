import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.page.html',
    styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
    }

    updateProfile() {

    }

    changePassword() {

    }

    logout() {
        this.authenticationService.logout();
    }
}
