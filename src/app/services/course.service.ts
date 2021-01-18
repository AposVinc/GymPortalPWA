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
      retry(3)
    );
  }

  getCourse(idGym: number, idCourse: number): Observable<Course> {
    return this.http.get<Course>(BASE_URL_GYMS + idGym + URL_COURSE + idCourse).pipe(
      retry(3)
    );
  }

}
