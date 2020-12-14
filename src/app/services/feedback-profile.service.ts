import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {FeedbackGym} from '../domain/FeedbackGym';
import {catchError, retry} from 'rxjs/operators';
import {FeedbackCourse} from '../domain/FeedbackCourse';

const BASE_URL_USERS = 'http://localhost:8080/GymREST/rest/users/';
const URL_FEEDBACKS_GYMS = '/feedbacks/gyms';
const URL_FEEDBACKS_COURSES = '/feedbacks/courses';

@Injectable({
  providedIn: 'root'
})
export class FeedbackProfileService {

  constructor(private http: HttpClient) {
  }

  getAllFeedbacksToGym(idUser: number, token: string): Observable<FeedbackGym[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<FeedbackGym[]>(BASE_URL_USERS + idUser + URL_FEEDBACKS_GYMS, {headers}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getAllFeedbacksToCourse(idUser: number, token: string): Observable<FeedbackCourse[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<FeedbackCourse[]>(BASE_URL_USERS + idUser + URL_FEEDBACKS_COURSES, {headers}).pipe(
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
