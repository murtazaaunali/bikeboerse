import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';

@Component({
    selector: 'app-my-account',
    templateUrl: './my-account.page.html',
    styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

    constructor(private authenticationService: AuthenticationService, private router: Router) {
        /* this.authenticationService.authenticationState.subscribe(state => {
            if (!state) {
                this.router.navigate(['login']);
            } else {
                this.router.navigate(['my-account']);
            }
        }); */
    }

    ngOnInit() {
    }

}
