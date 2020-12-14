import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {LoginData} from '../../domain/LoginData';
import {User} from '../../domain/User';

const BASE_URL = 'http://localhost:8080/GymREST/rest/auth/';
const URL_LOGIN = 'login';
const URL_REGISTRATION = 'registration';
const URL_REFRESH = 'refresh';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient, public jwtHelper: JwtHelperService) {
  }

  authenticate(user: User): Observable<HttpResponse<any>> {
    const params = new LoginData(user.username, user.password);

    return this.http.post<any>(BASE_URL + URL_LOGIN, params.stringify(),
        {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          observe: 'response'
        }).pipe(
          retry(3),
          catchError(this.handleError)
      );
  }

  register(user: User): Observable<any> {
    return this.http.post<any>(BASE_URL + URL_REGISTRATION, user).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  refreshToken(token: string): Observable<HttpResponse<any>> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<any>(BASE_URL + URL_REFRESH, {headers, observe: 'response'}).pipe(
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
      console.error(`Backend returned error: ${JSON.stringify(error)}`);
      /* console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${ JSON.stringify(error.error) }`); */
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
