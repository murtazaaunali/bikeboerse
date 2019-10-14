import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ProductModel } from './../models/product-model';
import { Observable, throwError, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { ToastController, Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    baseUrl: string = "https://bikeboerse.com/BikeApi/ios";
    constructor(private httpClient: HttpClient, public toastController: ToastController, public loadingController: LoadingController, private router: Router) { }

    public getAllPremiumOptions() {
        return this.httpClient.get(this.baseUrl + '/account/getallpremium.php')
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('getCategories', []))
            );
    }

    public getPremiumOption(id: number) {
        return this.httpClient.get(this.baseUrl + '/account/getpremiumbyid.php?id=' + id)
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('getCategories', []))
            );
    }

    public registerUser(nickname, name, surname, email, password, picture = 0, fb_access_token = 0, fb_user_id = 0) {

        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        let formData = {
            is_admin: 0,
            reg_time: '0',
            reg_ip_hash: '0',
            mail_verify: email,
            picture: picture,
            nickname: nickname,
            name: name,
            surname: surname,
            email: email,
            pw: password,
            pw_verify: password,
            pw_must_change: 0,
            fb_access_token: fb_access_token,
            fb_user_id: fb_user_id
        };

        this.httpClient.post(this.baseUrl + '/user/registeruser.php', formData, { headers: headers, observe: 'response' })
            .subscribe(response => {
                this.presentToastWithOptions("Success", "User created successfully.");
                console.log(response);
                this.router.navigate(['login']);
            }, error => {
                this.presentToastWithOptions("Error", "Invalid user data provided.<br>Please try again.");
                console.log(error.error);
            });
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log(message);
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
}
