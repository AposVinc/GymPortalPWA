import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Gym} from '../domain/Gym';
import {Course} from '../domain/Course';


const BASE_URL_USERS = 'http://localhost:8080/GymREST/rest/users/';
const URL_FAVORITE_GYMS = '/favorites/gyms/' ;
const URL_FAVORITE_COURSES = '/favorites/courses/' ;

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private  http: HttpClient) {
  }

  getAllFavoriteGyms(idUser: number, token: string): Observable<Gym[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Gym[]>(BASE_URL_USERS + idUser + URL_FAVORITE_GYMS, {headers}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addGymToFavorite(idUser: number, idGym: number, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(BASE_URL_USERS + idUser + URL_FAVORITE_GYMS, idGym, {headers}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  removeGymToFavorite(idUser: number, idGym: number, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.delete(BASE_URL_USERS + idUser + URL_FAVORITE_GYMS + idGym, {headers}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }


  getAllFavoriteCourses(idUser: number, token: string): Observable<Course[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Course[]>(BASE_URL_USERS + idUser + URL_FAVORITE_COURSES, {headers}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addCourseToFavorite(idUser: number, idCourse: number, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(BASE_URL_USERS + idUser + URL_FAVORITE_COURSES, idCourse, {headers}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  removeCourseToFavorite(idUser: number, idCourse: number, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.delete(BASE_URL_USERS + idUser + URL_FAVORITE_COURSES + idCourse, {headers}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
