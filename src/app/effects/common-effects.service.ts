import {Injectable, } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {Action, Store} from '@ngrx/store';
import {switchMap, tap} from 'rxjs/operators';
import {AuthService} from '../services/auth/auth.service';
import {UserService} from '../services/user.service';
import {ECommonActions, LoggedInAction, LoggedOutAction} from '../actions/common.actions';
import {EUserActions, LoginSuccessAction, LogOutAction, RegisterSuccessAction} from '../actions/user.actions';
import {IAppState} from '../state/app.states';

@Injectable()
export class CommonEffects {

  constructor(private store: Store<IAppState>, private actions: Actions, private authService: AuthService, private userService: UserService, private router: Router) {
  }

  @Effect()
  loginSuccess: Observable<Action> =
    this.actions.pipe(
      ofType<LoginSuccessAction>(EUserActions.LOGIN_SUCCESS),
      switchMap(() => of(new LoggedInAction())),
      tap(() => {
        return this.router.navigate(['/']);
      })
    );

  @Effect()
  logonSuccess: Observable<Action> =
    this.actions.pipe(
      ofType<RegisterSuccessAction>(EUserActions.REGISTER_SUCCESS),
      switchMap(() => of(new LoggedInAction())),
      tap(() => {
        return this.router.navigate(['/']);
      })
    );

  @Effect()
  logout: Observable<Action> =
    this.actions.pipe(
      ofType<LoggedOutAction>(ECommonActions.LOGGED_OUT),
      switchMap(() => of(new LogOutAction())),
      tap(() => {
        return this.router.navigate(['/login']);
      })
    );

}

