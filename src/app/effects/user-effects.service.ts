import {Injectable, } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {Action, Store} from '@ngrx/store';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {AuthService} from '../services/auth/auth.service';
import {UserService} from '../services/user.service';
import {
  EUserActions,
  LoginAction,
  LoginFailureAction,
  LoginSuccessAction, LogOutAction,
  RefreshDetailAction,
  RefreshDetailFailureAction,
  RefreshDetailSuccessAction,
  RegisterAction,
  RegisterFailureAction,
  RegisterSuccessAction,
  TokenRefreshAction,
  TokenRefreshFailureAction,
  TokenRefreshSuccessAction,
  UpdateAction, UpdateFailureAction,
  UpdateSuccessAction
} from '../actions/user.actions';
import {IAppState} from '../state/app.states';
import {selectUserDetail, selectUserToken} from '../selectors/user.selector';
import {LoggedOutAction} from '../actions/common.actions';

@Injectable()
export class UserEffects {

  constructor(private store: Store<IAppState>, private actions: Actions, private authService: AuthService, private userService: UserService, private router: Router) {
  }

  @Effect()
  login: Observable<Action> =
    this.actions.pipe(
      ofType<LoginAction>(EUserActions.LOGIN),
      switchMap((action) => this.authService.authenticate(action.user)),
      switchMap((result) => {
        return this.userService.getUser(result.headers.get('Location').substring(result.headers.get('Location').lastIndexOf('/') + 1)).pipe(
            mergeMap( (user) => [{user, token: result.headers.get('Authorization')}]),
          );
      }),
      switchMap((payload) => of(new LoginSuccessAction(payload))),
      catchError(() => of(new LoginFailureAction()))
    );

  @Effect()
  logon: Observable<Action> =
    this.actions.pipe(
      ofType<RegisterAction>(EUserActions.REGISTER),
      switchMap((action) => {
        return this.authService.register(action.user)
          .pipe(
            mergeMap( () =>
              this.authService.authenticate(action.user)
            ),
          );
      }),
      switchMap((result) => {
        return this.userService.getUser(result.headers.get('Location').substring(result.headers.get('Location').lastIndexOf('/') + 1))
          .pipe(
            mergeMap( (user) => [{user, token: result.headers.get('Authorization')}]
            ),
        );
      }),
      switchMap((payload) => of(new RegisterSuccessAction(payload))),
      catchError(() => of(new RegisterFailureAction()))
    );

  @Effect()
  refreshToken: Observable<Action> =
    this.actions.pipe(
      ofType<TokenRefreshAction>(EUserActions.TOKEN_REFRESH),
      switchMap(() => this.store.select(selectUserToken)),
      switchMap((token) => this.authService.refreshToken(token)),
      switchMap((result) => of(new TokenRefreshSuccessAction(result.headers.get('Authorization')))),
      catchError(() => {
        of(new LoggedOutAction());
        return of(new TokenRefreshFailureAction());
      })
    );

  @Effect()
  refreshUserDetail: Observable<Action> =
    this.actions.pipe(
      ofType<RefreshDetailAction>(EUserActions.REFRESH_DETAIL),
      switchMap(() => this.store.select(selectUserDetail)),
      switchMap((user) => this.userService.getUser(user.id)),
      switchMap((result) => of(new RefreshDetailSuccessAction(result))),
      catchError(() => of(new RefreshDetailFailureAction()))
    );

  @Effect()
  updateUser: Observable<Action> =
    this.actions.pipe(
      ofType<UpdateAction>(EUserActions.UPDATE),
      switchMap((action) => {
        return this.store.select(selectUserToken).pipe(
          mergeMap( (token) => {
            return this.userService.updateUser(action.user, token).pipe(
              map( () => action.user)
            );
          })
          // return this.store.select(selectUserDetail).pipe(
          //   mergeMap((u) => {
          //     return this.userService.updateUser(u.id, action.user, token).pipe(
          //       map( () => action.user)
          //     );
          //   }));
        );
      }),
      switchMap((result) => {
        console.log(result);
        return of(new UpdateSuccessAction(result));
      }),
      catchError(() => of(new UpdateFailureAction()))
    );

}

