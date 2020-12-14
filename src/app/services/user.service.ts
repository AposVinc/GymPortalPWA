import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from '../domain/User';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

const BASE_URL_USERS = 'http://localhost:8080/GymREST/rest/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(idUser): Observable<User> {
    return this.http.get<User>(BASE_URL_USERS + idUser).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  updateUser(user: User, token: string): Observable<User> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.put<User>(BASE_URL_USERS + user.id, user, {headers}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line:typedef
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
