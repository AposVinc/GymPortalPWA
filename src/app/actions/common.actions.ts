import { Action } from '@ngrx/store';
import {Gym} from '../domain/Gym';

export enum ECommonActions {
  LOGGED_IN = '[Common] Logged in',
  LOGGED_OUT = '[Common] Logged out',
}
export class LoggedInAction implements Action {
  readonly type = ECommonActions.LOGGED_IN;
}
export class LoggedOutAction implements Action {
  readonly type = ECommonActions.LOGGED_OUT;
}

export type ALL_COMMON_REDUCER_ACTIONS = LoggedInAction | LoggedOutAction;

