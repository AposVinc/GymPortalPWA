import { Action } from '@ngrx/store';
import {Gym} from '../domain/Gym';

export enum EGymActions {
  SHOW_ALL = '[Gym] Show All',
  SHOW_ALL_FAILURE = '[Gym] Show All Failure',
  SHOW_ALL_SUCCESS = '[Gym] Show All Success',

  GET_GYM = '[Gym] Get Gym',
  GET_GYM_FAILURE = '[Gym] Get Gym Failure',
  GET_GYM_SUCCESS = '[Gym] Get Gym Success',
}

export class ShowAllAction implements Action {
  readonly type = EGymActions.SHOW_ALL;
  constructor(public region: string, public name: string) {}
}
export class ShowAllFailureAction implements Action {
  readonly type = EGymActions.SHOW_ALL_FAILURE;
}
export class ShowAllSuccessAction implements Action {
  readonly type = EGymActions.SHOW_ALL_SUCCESS;
  constructor(public payload: Gym[]) {}
}


export class GetGymAction implements Action {
  readonly type = EGymActions.GET_GYM;
  constructor(public idGym: number) {}
}
export class GetGymFailureAction implements Action {
  readonly type = EGymActions.GET_GYM_FAILURE;
}
export class GetGymSuccessAction implements Action {
  readonly type = EGymActions.GET_GYM_SUCCESS;
  constructor(public payload: Gym) {}
}

export type ALL_GYM_REDUCER_ACTIONS =
  ShowAllAction | ShowAllFailureAction | ShowAllSuccessAction |
  GetGymAction | GetGymFailureAction | GetGymSuccessAction;

