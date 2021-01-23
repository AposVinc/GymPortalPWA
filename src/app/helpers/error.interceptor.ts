import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAppState} from '../state/app.states';
import {TokenRefreshAction} from '../actions/user.actions';
import {LoggedOutAction} from '../actions/common.actions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<IAppState>) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (request.url.includes('auth/login') || request.url.includes('auth/registration') || request.url.includes('auth/admin/login')) {
        console.log('gestione grafica errore');
        return next.handle(request);
      }
      if (request.url.includes('auth/refresh')) {
        this.store.dispatch(new LoggedOutAction());
        localStorage.removeItem('admin-token');
      }
      if ([401].includes(err.status)) {
        // auto logout if 401 or 403 response returned from api
        console.log('errore 401');
        this.store.dispatch(new TokenRefreshAction());
      }
      if ([403].includes(err.status)) {
        // auto logout if 401 or 403 response returned from api
        console.log('errore 403');
        this.store.dispatch(new LoggedOutAction());
      }
      // if ([401, 403].includes(err.status)) {
      //   // auto logout if 401 or 403 response returned from api
      //   console.log('errore 401 o 403');
      //   if (request.url.includes('refresh')) {
      //     this.store.dispatch(new LoggedOutAction());
      //   } else {
      //     this.store.dispatch(new TokenRefreshAction());
      //   }
      // }

      const error = (err && err.error && err.error.message) || err.statusText;
      // console.error(err);
      return throwError(error);
    }));
  }
}
