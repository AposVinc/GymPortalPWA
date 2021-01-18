import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {FeedbackCourse} from '../domain/FeedbackCourse';
import {catchError, retry} from 'rxjs/operators';

const BASE_URL_GYMS = 'http://localhost:8080/GymREST/rest/gyms/';
const URL_COURSES = '/courses/';
const URL_FEEDBACKS = '/feedbacks/';

@Injectable({
  providedIn: 'root'
})
export class FeedbackCourseService {

  constructor(private http: HttpClient) {
  }

  getAll(idGym: number, idCourse: number): Observable<FeedbackCourse[]> {
    return this.http.get<FeedbackCourse[]>(BASE_URL_GYMS + idGym + URL_COURSES + idCourse + URL_FEEDBACKS);
  }

  save(idGym: number, feedback: FeedbackCourse, token: string): Observable<HttpResponse<any>> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(BASE_URL_GYMS + idGym + URL_COURSES + feedback.course + URL_FEEDBACKS, feedback, {headers, observe: 'response'}).pipe(
      retry(3)
    );
  }

  update(idGym: number, feedback: FeedbackCourse, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.put(BASE_URL_GYMS + idGym + URL_COURSES + feedback.course + URL_FEEDBACKS + feedback.id, feedback, {headers}).pipe(
      retry(3)
    );
  }

  delete(idGym: number, feedback: FeedbackCourse, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.delete(BASE_URL_GYMS + idGym + URL_COURSES + feedback.course + URL_FEEDBACKS + feedback.id, {headers}).pipe(
      retry(3)
    );
  }

}
