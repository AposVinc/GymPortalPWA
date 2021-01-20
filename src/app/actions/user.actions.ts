import {Action} from '@ngrx/store';
import {User} from '../domain/User';

export enum EUserActions {
  LOGIN = '[User] Login',
  LOGIN_FAILURE = '[User] Login Failure',
  LOGIN_SUCCESS = '[User] Login Success',

  REGISTER = '[User] Register',
  REGISTER_FAILURE = '[User] Register Failure',
  REGISTER_SUCCESS = '[User] Register Success',

  TOKEN_REFRESH = '[User] Token Refresh',
  TOKEN_REFRESH_FAILURE = '[User] Token Refresh Failure',
  TOKEN_REFRESH_SUCCESS = '[User] Token Refresh Success',

  REFRESH_DETAIL = '[User] Refresh Detail',
  REFRESH_DETAIL_FAILURE = '[User] Refresh Detail Failure',
  REFRESH_DETAIL_SUCCESS = '[User] Refresh Detail Success',

  UPDATE = '[User] Update',
  UPDATE_FAILURE = '[User] Update Failure',
  UPDATE_SUCCESS = '[User] Update Success',

  LOGOUT = '[User] Logout',
}
export class LoginAction implements Action {
  readonly type = EUserActions.LOGIN;
  constructor(public user: User) {}
}
export class LoginFailureAction implements Action {
  readonly type = EUserActions.LOGIN_FAILURE;
}
export class LoginSuccessAction implements Action {
  readonly type = EUserActions.LOGIN_SUCCESS;
  constructor(public payload: { user: User, token: string }) {}
}

export class RegisterAction implements Action {
  readonly type = EUserActions.REGISTER;
  constructor(public user: User) {}
}
export class RegisterFailureAction implements Action {
  readonly type = EUserActions.REGISTER_FAILURE;
}
export class RegisterSuccessAction implements Action {
  readonly type = EUserActions.REGISTER_SUCCESS;
  constructor(public payload: { user: User, token: string }) {}
}

export class TokenRefreshAction implements Action {
  readonly type = EUserActions.TOKEN_REFRESH;
}
export class TokenRefreshFailureAction implements Action {
  readonly type = EUserActions.TOKEN_REFRESH_FAILURE;
}
export class TokenRefreshSuccessAction implements Action {
  readonly type = EUserActions.TOKEN_REFRESH_SUCCESS;
  constructor(public payload: string) {}
}

export class RefreshDetailAction implements Action {
  readonly type = EUserActions.REFRESH_DETAIL;
}
export class RefreshDetailFailureAction implements Action {
  readonly type = EUserActions.REFRESH_DETAIL_FAILURE;
}
export class RefreshDetailSuccessAction implements Action {
  readonly type = EUserActions.REFRESH_DETAIL_SUCCESS;
  constructor(public payload: User) {}
}

export class UpdateAction implements Action {
  readonly type = EUserActions.UPDATE;
  constructor(public user: User) {}
}
export class UpdateFailureAction implements Action {
  readonly type = EUserActions.UPDATE_FAILURE;
}
export class UpdateSuccessAction implements Action {
  readonly type = EUserActions.UPDATE_SUCCESS;
  constructor(public payload: User) {}
}

export class LogOutAction implements Action {
  readonly type = EUserActions.LOGOUT;
}

export type ALL_USER_REDUCER_ACTIONS = LoginAction | LoginFailureAction | LoginSuccessAction
  | RegisterAction | RegisterFailureAction | RegisterSuccessAction
  | TokenRefreshAction | TokenRefreshFailureAction | TokenRefreshSuccessAction
  | RefreshDetailAction | RefreshDetailFailureAction | RefreshDetailSuccessAction
  | UpdateAction | UpdateFailureAction | UpdateSuccessAction
  | LogOutAction;

