import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {IAppState} from '../state/app.states';
import {TokenRefreshAction} from '../actions/user.actions';
import {LoggedOutAction} from '../actions/common.actions';
import {selectUserToken} from '../selectors/user.selector';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<IAppState>) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401].includes(err.status)) {
        // auto logout if 401 or 403 response returned from api
        console.log('errore 401');
        this.store.dispatch(new LoggedOutAction());
      }
      if ([403].includes(err.status)) {
        // auto logout if 401 or 403 response returned from api
        console.log('errore 403');
        this.store.dispatch(new TokenRefreshAction());
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
      console.error(err);
      return throwError(error);
    }));
  }
}
