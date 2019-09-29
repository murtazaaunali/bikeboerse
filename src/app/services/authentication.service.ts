import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    baseUrl: string = "https://bikeboerse.com/BikeApi/ios";
    authenticationState = new BehaviorSubject(false);

    constructor(private storage: Storage, private plt: Platform, private httpClient: HttpClient) {
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }

    checkToken() {
        this.storage.get(TOKEN_KEY).then(res => {
            if (res) {
                this.authenticationState.next(true);
            }
        })
    }

    login() {
        let postData = {
            "username": "ayaazfi@gmail.com",
            "passwrod": "1234"
        }
        this.httpClient.post(this.baseUrl + "/user/userlogin.php", postData)
            .subscribe(data => {
                return this.storage.set(TOKEN_KEY, 'Bearer ' + data[0].id).then(() => {
                    this.authenticationState.next(true);
                });
            }, error => {
                console.log(error);
            });
    }

    logout() {
        return this.storage.remove(TOKEN_KEY).then(() => {
            this.authenticationState.next(false);
        });
    }

    isAuthenticated() {
        return this.authenticationState.value;
    }
}
