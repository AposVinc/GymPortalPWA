import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../domain/User';
import {LoginData} from '../domain/LoginData';
import {retry} from 'rxjs/operators';

const BASE_URL = 'http://localhost:8080/GymREST/rest/auth/';
const URL_ADMIN_LOGIN = 'admin/login';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) {
  }

  authenticateAdmin(admin: User): Observable<HttpResponse<any>> {
    const params = new LoginData(admin.username, admin.password);

    return this.http.post<any>(BASE_URL + URL_ADMIN_LOGIN, params.stringify(),
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        observe: 'response'
      }).pipe(
      retry(3)
    );
  }

}
