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
      retry(3)
    );
  }

  getGymsByRegion(region: string): Observable<Gym[]> {
    return this.http.get<Gym[]>(BASE_URL_GYMS + URL_REGION + region).pipe(
      retry(3)
    );
  }

  getGymsByName(name: string): Observable<Gym[]> {
    return this.http.get<Gym[]>(BASE_URL_GYMS + URL_NAME + name).pipe(
      retry(3)
    );
  }

  getGym(idGym: number): Observable<Gym> {
    return this.http.get<Gym>(BASE_URL_GYMS + '/' + idGym).pipe(
      retry(3)
    );
  }


}
