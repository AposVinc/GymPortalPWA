import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Course} from '../domain/Course';
import {catchError, retry} from 'rxjs/operators';

const BASE_URL_GYMS = 'http://localhost:8080/GymREST/rest/gyms/';
const URL_COURSE = '/courses/';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {
  }

  getAll(idGym: number): Observable<Course[]> {
    return this.http.get<Course[]>(BASE_URL_GYMS + idGym + URL_COURSE).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getCourse(idGym: number, idCourse: number): Observable<Course> {
    return this.http.get<Course>(BASE_URL_GYMS + idGym + URL_COURSE + idCourse).pipe(
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
