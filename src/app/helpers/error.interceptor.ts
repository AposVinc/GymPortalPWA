import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAppState} from '../state/app.states';
import {TokenRefreshAction} from '../actions/user.actions';
import {LoggedOutAction} from '../actions/common.actions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<IAppState>) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401].includes(err.status)) {
        // auto logout if 401 or 403 response returned from api
        console.log('errore 401');
        this.store.dispatch(new LoggedOutAction());
        // this.authenticationService.logout();
      }
      if ([403].includes(err.status)) {
        // auto logout if 401 or 403 response returned from api
        console.log('errore 403');
        this.store.dispatch(new TokenRefreshAction());
        // this.authenticationService.logout();
      }

      const error = (err && err.error && err.error.message) || err.statusText;
      console.error(err);
      return throwError(error);
    }));
  }
}
