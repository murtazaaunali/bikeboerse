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

    isLoggedIn = false;
    user = { id: '', name: '', email: '', fb_picture: { data: { url: '' } } };

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
                this.router.navigate(['my-account']);
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
        this.fb.login(['public_profile', 'email'])
            .then(res => {
                if (res.status === 'connected') {
                    this.fb.api('/' + res.authResponse.userID + '/?fields=id,email,name,picture', ['public_profile'])
                        .then(res => {
                            console.log(res);
                            if (res) {
                                this.user = res;
                                this.storage.set('USER_INFO', this.user).then((response) => {
                                    console.log(response);
                                    this.router.navigate(['my-account']);
                                    this.authState.next(true);
                                });
                            } else {
                                this.presentToastWithOptions('Error', 'Error logging into Facebook. Please try again.');
                            }
                        })
                        .catch(e => {
                            this.presentToastWithOptions('Error', 'Error logging into Facebook. Error:' + e.message);
                            console.log(e);
                        });
                } else {
                    this.isLoggedIn = false;
                }
            })
            .catch(e => {
                this.presentToastWithOptions('Error', 'Error logging into Facebook. Error:' + e.message);
                console.log('Error logging into Facebook', e)
            });
    }

    getUserDetail(userid: any) {
        this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
            .then(res => {
                console.log(res);
                this.user = res;
            })
            .catch(e => {
                console.log(e);
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
