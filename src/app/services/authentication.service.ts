import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { tap, catchError } from 'rxjs/operators';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    baseUrl: string = "https://bikeboerse.com/BikeApi/ios/user/userlogin.php?";
    authState = new BehaviorSubject(false);

    constructor(private router: Router,
        private storage: Storage,
        private platform: Platform,
        private httpClient: HttpClient,
        public toastController: ToastController,
        private fb: Facebook) {
        this.platform.ready().then(() => {
            this.ifLoggedIn();
        });
    }

    ifLoggedIn() {
        this.storage.get('USER_INFO').then((response) => {
            if (response) {
                this.authState.next(true);
            }
        });
    }

    login(username, password) {
        this.httpClient.get(this.baseUrl + 'username=' + username + '&passwrod=' + password)
            .subscribe(data => {
                console.log(data);
                this.storage.set('USER_INFO', data[0]).then((response) => {
                    console.log(response);
                    this.router.navigate(['my-account']);
                    this.authState.next(true);
                });
            }, error => {
                this.presentToastWithOptions("Error", "Invalid credentials provided.<br>Please try again.");
                console.log(error.error);
            });

    }

    loginWithFB() {
        this.fb.getLoginStatus().then((res) => {
            console.log(res);
            if (res.status === 'connected') {
                console.log(res);
            } else {
                this.fb.login(['public_profile', 'user_profile', 'email'])
                    .then((res: FacebookLoginResponse) => {
                        console.log('Logged into Facebook!', res);
                    })
                    .catch(e => {
                        console.log('Error logging into Facebook', e);
                    });
                this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
            }
        });
    }

    logout() {
        this.storage.remove('USER_INFO').then(() => {
            this.router.navigate(['home']);
            this.authState.next(false);
        });
    }

    async presentToastWithOptions(header, message) {
        const toast = await this.toastController.create({
            header: header,
            message: message,
            position: 'middle',
            showCloseButton: true,
            translucent: true
        });
        toast.present();
    }

    isAuthenticated() {
        return this.authState.value;
    }
}
