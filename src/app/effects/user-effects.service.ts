import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {catchError, concatMap, switchMap} from 'rxjs/operators';
import {AuthService} from '../services/auth/auth.service';
import {UserService} from '../services/user.service';
import {
  EUserActions,
  LoginAction,
  LoginFailureAction,
  LoginSuccessAction,
  RefreshDetailAction,
  RefreshDetailFailureAction,
  RefreshDetailSuccessAction,
  RegisterAction,
  RegisterFailureAction,
  RegisterSuccessAction,
  TokenRefreshAction,
  TokenRefreshFailureAction,
  TokenRefreshSuccessAction,
  UpdateAction,
  UpdateFailureAction,
  UpdateSuccessAction
} from '../actions/user.actions';
import {IAppState} from '../state/app.states';
import {selectUserDetail, selectUserToken} from '../selectors/user.selector';
import {LoggedOutAction} from '../actions/common.actions';
import {User} from '../domain/User';

@Injectable()
export class UserEffects {

  constructor(private store: Store<IAppState>, private actions: Actions, private authService: AuthService, private userService: UserService, private router: Router) {
  }

  login = createEffect(() => this.actions.pipe(
    ofType<LoginAction>(EUserActions.LOGIN),
    switchMap((action) => this.authService.authenticate(action.user).pipe(
      concatMap(result => this.userService.getUser(result.headers.get('Location').substring(result.headers.get('Location').lastIndexOf('/') + 1)).pipe(
        concatMap((user) => [{user, token: result.headers.get('Authorization')}])
      )),
      concatMap((payload) => of(new LoginSuccessAction(payload))),
      catchError(() => of(new LoginFailureAction()))
    )))
  );

  logon = createEffect(() => this.actions.pipe(
    ofType<RegisterAction>(EUserActions.REGISTER),
    switchMap((action) => this.authService.register(action.user).pipe(
      concatMap(() => this.authService.authenticate(action.user).pipe(
        concatMap(result => this.userService.getUser(result.headers.get('Location').substring(result.headers.get('Location').lastIndexOf('/') + 1)).pipe(
          concatMap((user) => [{user, token: result.headers.get('Authorization')}])
        )),
      )),
      concatMap((payload) => of(new RegisterSuccessAction(payload))),
      catchError(() => of(new RegisterFailureAction()))
    )))
  );

  refreshToken = createEffect(() => this.actions.pipe(
    ofType<TokenRefreshAction>(EUserActions.TOKEN_REFRESH),
    switchMap(() => this.store.select(selectUserToken).pipe(
      concatMap(token => this.authService.refreshToken(token)),
      concatMap(result => of(new TokenRefreshSuccessAction(result.headers.get('Authorization')))),
      catchError(() => {
        of(new LoggedOutAction());
        return of(new TokenRefreshFailureAction());
      })
    )))
  );

  refreshUserDetail = createEffect(() => this.actions.pipe(
    ofType<RefreshDetailAction>(EUserActions.REFRESH_DETAIL),
    switchMap(() => this.store.select(selectUserDetail).pipe(
      concatMap(user => this.userService.getUser(user.id)),
      concatMap((result) => of(new RefreshDetailSuccessAction(result))),
      catchError(() => of(new RefreshDetailFailureAction()))
    )))
  );

  updateUser = createEffect(() => this.actions.pipe(
    ofType<UpdateAction>(EUserActions.UPDATE),
    switchMap((action) => this.store.select(selectUserToken).pipe(
      concatMap( (token) => this.userService.updateUser(action.user, token)),
      concatMap(() => of(new UpdateSuccessAction({...action.user, password: ''}))
      ),
      catchError(() => of(new UpdateFailureAction()))
    )))
  );

}

