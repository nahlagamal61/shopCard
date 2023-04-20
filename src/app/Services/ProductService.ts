import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../Models/ProductModel'

import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: ''
      })
    }
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log("An error occured: ", error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened, Please try again later'));
  }

  getAll():Observable<ProductModel[]>{
    return this.httpClient
    .get<ProductModel[]>(`${environment.apiUrl}/Products`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getById(id:number):Observable<ProductModel>{
    return this.httpClient
      .get<ProductModel>(`http://localhost:8080/Products/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  add(product:ProductModel):Observable<ProductModel>{
    return this.httpClient
      .post<ProductModel>(`${environment.apiUrl}/Products`,JSON.stringify(product),this.httpOption)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  edit( product:ProductModel){
    return this.httpClient
      .patch<ProductModel>(`${environment.apiUrl}/Products/${product._id}`,JSON.stringify(product), this.httpOption)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  deleteById(id:number){
    return this.httpClient
      .delete<ProductModel>(`${environment.apiUrl}/Products/${id}`, this.httpOption)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


}