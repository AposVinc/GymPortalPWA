import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Gym} from '../domain/Gym';
import {Course} from '../domain/Course';
import {FeedbackCourse} from '../domain/FeedbackCourse';

const BASE_URL = 'http://localhost:8080/GymREST/rest/gyms/';
const URL_COURSE = '/courses/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) {
  }

  saveGym(gym: Gym): Observable<HttpResponse<any>> {
    const token: string = JSON.parse(localStorage.getItem('admin-token'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(BASE_URL, gym, {headers, observe: 'response'}).pipe(
      retry(3)
    );
  }

  updateGym(gym: Gym): Observable<any> {
    const token: string = JSON.parse(localStorage.getItem('admin-token'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.put(BASE_URL + gym.id, gym, {headers}).pipe(
      retry(3)
    );
  }

  deleteGym(idGym: number): Observable<any> {
    const token: string = JSON.parse(localStorage.getItem('admin-token'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.delete(BASE_URL + idGym, {headers}).pipe(
      retry(3)
    );
  }

  saveCourse(course: Course): Observable<HttpResponse<any>> {
    const token: string = JSON.parse(localStorage.getItem('admin-token'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(BASE_URL + course.gym + URL_COURSE, course, {headers, observe: 'response'}).pipe(
      retry(3)
    );
  }

  updateCourse(course: Course): Observable<any> {
    const token: string = JSON.parse(localStorage.getItem('admin-token'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.put(BASE_URL + course.gym + URL_COURSE + course.id, course, {headers}).pipe(
      retry(3)
    );
  }

  deleteCourse(idGym: number, idCourse: number): Observable<any> {
    const token: string = JSON.parse(localStorage.getItem('admin-token'));
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.delete(BASE_URL + idGym + URL_COURSE + idCourse, {headers}).pipe(
      retry(3)
    );
  }
}
