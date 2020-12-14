import {Injectable} from '@angular/core';
import {Gym} from '../domain/Gym';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

const BASE_URL_GYMS = 'http://localhost:8080/GymREST/rest/gyms';
const URL_REGION = '?region=';
const URL_NAME = '?name=';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Gym[]> {
    return this.http.get<Gym[]>(BASE_URL_GYMS).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getGymsByRegion(region: string): Observable<Gym[]> {
    return this.http.get<Gym[]>(BASE_URL_GYMS + URL_REGION + region).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getGymsByName(name: string): Observable<Gym[]> {
    return this.http.get<Gym[]>(BASE_URL_GYMS + URL_NAME + name).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  getGym(idGym: number): Observable<Gym> {
    return this.http.get<Gym>(BASE_URL_GYMS + '/' + idGym).pipe(
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
