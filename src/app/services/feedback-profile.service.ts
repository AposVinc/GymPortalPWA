import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FeedbackGym} from '../domain/FeedbackGym';
import {retry} from 'rxjs/operators';
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
      retry(3)
    );
  }

  getAllFeedbacksToCourse(idUser: number, token: string): Observable<FeedbackCourse[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<FeedbackCourse[]>(BASE_URL_USERS + idUser + URL_FEEDBACKS_COURSES, {headers}).pipe(
      retry(3)
    );
  }


}
