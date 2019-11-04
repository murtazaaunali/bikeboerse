import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class VideosService {
    baseUrl: string = "https://bikeboerse.com/BikeApi/ios";
    videos_url: string;

    per_page: number = 10;

    constructor(private httpClient: HttpClient) { }

    public getVideos() {
        this.videos_url = this.baseUrl + '/product/getallvideos.php?orderby=title';
        return this.httpClient.get(this.videos_url)
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('getVideos', []))
            );
    }

    public getLatestVideos() {
        this.videos_url = this.baseUrl + '/product/getallvideos.php?limit=0,10&orderby=title';
        return this.httpClient.get(this.videos_url)
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('getLatestVideos', []))
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
