import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
import {Gym} from '../domain/Gym';
import {Course} from '../domain/Course';


const BASE_URL_USERS = 'http://localhost:8080/GymREST/rest/users/';
const URL_FAVORITE_GYMS = '/favorites/gyms/' ;
const URL_FAVORITE_COURSES = '/favorites/courses/' ;

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private  http: HttpClient) {
  }

  getAllFavoriteGyms(idUser: number, token: string): Observable<Gym[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Gym[]>(BASE_URL_USERS + idUser + URL_FAVORITE_GYMS, {headers}).pipe(
      retry(3)
    );
  }

  addGymToFavorite(idUser: number, idGym: number, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(BASE_URL_USERS + idUser + URL_FAVORITE_GYMS, idGym, {headers}).pipe(
      retry(3)
    );
  }

  removeGymToFavorite(idUser: number, idGym: number, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.delete(BASE_URL_USERS + idUser + URL_FAVORITE_GYMS + idGym, {headers}).pipe(
      retry(3)
    );
  }


  getAllFavoriteCourses(idUser: number, token: string): Observable<Course[]> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.get<Course[]>(BASE_URL_USERS + idUser + URL_FAVORITE_COURSES, {headers}).pipe(
      retry(3)
    );
  }

  addCourseToFavorite(idUser: number, idCourse: number, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.post(BASE_URL_USERS + idUser + URL_FAVORITE_COURSES, idCourse, {headers}).pipe(
      retry(3)
    );
  }

  removeCourseToFavorite(idUser: number, idCourse: number, token: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', token);
    return this.http.delete(BASE_URL_USERS + idUser + URL_FAVORITE_COURSES + idCourse, {headers}).pipe(
      retry(3)
    );
  }


}
