import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {FeedbackGym} from '../domain/FeedbackGym';
import {catchError, retry} from 'rxjs/operators';

const BASE_URL_GYMS = 'http://localhost:8080/GymREST/rest/gyms/';
const URL_FEEDBACKS = '/feedbacks/';

@Injectable({
  providedIn: 'root'
})
export class FeedbackGymService {

  constructor(private http: HttpClient) {
  }

  getAll(idGym: number): Observable<FeedbackGym[]> {
    return this.http.get<FeedbackGym[]>(BASE_URL_GYMS + idGym + URL_FEEDBACKS).pipe(
      retry(3)
    );
  }

  save(feedback: FeedbackGym, token: string): Observable<HttpResponse<any>> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(BASE_URL_GYMS + feedback.gym + URL_FEEDBACKS, feedback, {headers, observe: 'response'}).pipe(
      retry(3)
    );
  }

  update(feedback: FeedbackGym, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.put(BASE_URL_GYMS + feedback.gym + URL_FEEDBACKS + feedback.id, feedback, {headers}).pipe(
      retry(3)
    );
  }

  delete(feedback: FeedbackGym, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.delete(BASE_URL_GYMS + feedback.gym + URL_FEEDBACKS + feedback.id, {headers}).pipe(
      retry(3)
    );
  }

}
