import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    username: any;
    password: any;

    constructor(private authenticationService: AuthenticationService) {
    }

    login() {
        this.authenticationService.login(this.username, this.password);
    }

    loginWithFB() {
        this.authenticationService.loginWithFB();
    }
    ngOnInit() {
        this.authenticationService.ifLoggedIn();
    }

}
