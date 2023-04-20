import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../Models/CategoryModel'

import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProductModel } from '../Models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class CatogoryService {

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

  getAll():Observable<CategoryModel[]>{
    return this.httpClient
    .get<CategoryModel[]>(`${environment.apiUrl}/Category`)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getById(id:number):Observable<CategoryModel>{
    return this.httpClient
      .get<CategoryModel>(`http://localhost:8080/Category/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  add(category:CategoryModel):Observable<CategoryModel>{
    return this.httpClient
      .post<CategoryModel>(`${environment.apiUrl}/Category`,JSON.stringify(category),this.httpOption)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  edit( category:CategoryModel){
    return this.httpClient
      .patch<CategoryModel>(`${environment.apiUrl}/Category/${category._id}`,JSON.stringify(category), this.httpOption)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  deleteById(id:number){
    return this.httpClient
      .delete<CategoryModel>(`${environment.apiUrl}/Category/${id}`, this.httpOption)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  

}