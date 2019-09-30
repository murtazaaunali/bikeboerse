import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductModel } from './../models/product-model';
import { Observable, throwError, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable()
export class ProductsService {

    baseUrl: string = "https://bikeboerse.com/BikeApi/ios";
    constructor(private httpClient: HttpClient) { }

    public getProducts(limit = '0,10', order = 'title'): Observable<any> {
        return this.httpClient.get(this.baseUrl + '/product/readproductwithlimitorder.php?limit=' + limit + '&orderby=' + order)
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('getProducts', []))
            );
    }

    public getProduct(productId: number): Observable<any> {
        return this.httpClient.get(this.baseUrl + '/product/readbyid.php?id=' + productId)
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('getProducts', []))
            );
    }
    
    public searchProducts(keyword: string): Observable<any> {
        return this.httpClient.get(this.baseUrl + '/product/SearchByProduct.php?title=' + keyword)
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('getProducts', []))
            );
    }

    public getProductsByCategory(categoryId: number): Observable<any> {
        return this.httpClient.get(this.baseUrl + '/product/readproductbycatId.php?id=' + categoryId)
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('getProducts', []))
            );
    }

    public createProduct(product: ProductModel) {
        return this.httpClient.post(this.baseUrl + '/product/insertproduct.php', product)
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('createProduct', []))
            );
    }

    public updateProduct(product: ProductModel) {
        return this.httpClient.put(this.baseUrl + '/product/update.php' + product.id, product)
            .pipe(
                tap(_ => this.log('response received')),
                catchError(this.handleError('createProduct', []))
            );
    }

    /*  public deleteProduct(productId: number) {
         return this.httpClient.delete(this.baseUrl + '/products/' + productId)
             .catch((e) => {
                 console.error(e);
             });
     } */

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            this.log(operation + "failed:" + error.message);
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        console.log(message);
    }
}
