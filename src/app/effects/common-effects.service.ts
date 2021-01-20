import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
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

  loginSuccess = createEffect(() => this.actions.pipe(
    ofType<LoginSuccessAction>(EUserActions.LOGIN_SUCCESS),
    switchMap(() => of(new LoggedInAction())),
    tap(() => this.router.navigate(['/']))
    )
  );

  logonSuccess = createEffect(() => this.actions.pipe(
    ofType<RegisterSuccessAction>(EUserActions.REGISTER_SUCCESS),
    switchMap(() => of(new LoggedInAction())),
    tap(() => this.router.navigate(['/']))
    )
  );

  logout = createEffect(() => this.actions.pipe(
    ofType<LoggedOutAction>(ECommonActions.LOGGED_OUT),
    switchMap(() => of(new LogOutAction())),
    tap(() => this.router.navigate(['/']))
    )
  );

}

