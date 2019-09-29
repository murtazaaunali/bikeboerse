import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductModel } from './../models/product-model';
import { Observable, throwError, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class VideosService {
    baseUrl: string = "https://bikeboerse.com/BikeApi/ios";
    constructor(private httpClient: HttpClient) { }

    public getVideos() {
        return this.httpClient.get(this.baseUrl + '/product/getallvideos.php?limit=0,10&orderby=title')
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('getVideos', []))
            );
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

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        console.log(message);
    }
}
