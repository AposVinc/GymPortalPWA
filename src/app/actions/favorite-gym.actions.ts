import {Action} from '@ngrx/store';
import {Gym} from '../domain/Gym';

export enum EFavoriteGymActions {
  SHOW_ALL = '[FavoriteGym] Show All',
  SHOW_ALL_SUCCESS = '[FavoriteGym] Show All Success',
  SHOW_ALL_FAILURE = '[FavoriteGym] Show All Failure',

  CREATE = '[FavoriteGym] Create',
  CREATE_SUCCESS = '[FavoriteGym] Create Success',
  CREATE_FAILURE = '[FavoriteGym] Create Failure',

  DELETE = '[FavoriteGym] Delete',
  DELETE_SUCCESS = '[FavoriteGym] Delete Success',
  DELETE_FAILURE = '[FavoriteGym] Delete Failure',
}

export class ShowAllFavoritesGymAction implements Action {
  readonly type = EFavoriteGymActions.SHOW_ALL;
}
export class ShowAllFavoritesGymFailureAction implements Action {
  readonly type = EFavoriteGymActions.SHOW_ALL_FAILURE;
}
export class ShowAllFavoritesGymSuccessAction implements Action {
  readonly type = EFavoriteGymActions.SHOW_ALL_SUCCESS;
  constructor(public payload: Gym[]) {}
}

export class CreateFavoriteGymAction implements Action {
  readonly type = EFavoriteGymActions.CREATE;
  constructor(public gym: Gym) {}
}
export class CreateFavoriteGymFailureAction implements Action {
  readonly type = EFavoriteGymActions.CREATE_FAILURE;
}
export class CreateFavoriteGymSuccessAction implements Action {
  readonly type = EFavoriteGymActions.CREATE_SUCCESS;
  constructor(public payload: Gym) {}
}

export class DeleteFavoriteGymAction implements Action {
  readonly type = EFavoriteGymActions.DELETE;
  constructor(public gym: Gym) {}
}
export class DeleteFavoriteGymFailureAction implements Action {
  readonly type = EFavoriteGymActions.DELETE_FAILURE;
}
export class DeleteFavoriteGymSuccessAction implements Action {
  readonly type = EFavoriteGymActions.DELETE_SUCCESS;
  constructor(public payload: Gym) {}
}

export type ALL_FAVORITE_GYM_REDUCER_ACTIONS =
  ShowAllFavoritesGymAction | ShowAllFavoritesGymFailureAction | ShowAllFavoritesGymSuccessAction |
  CreateFavoriteGymAction | CreateFavoriteGymFailureAction | CreateFavoriteGymSuccessAction |
  DeleteFavoriteGymAction | DeleteFavoriteGymFailureAction | DeleteFavoriteGymSuccessAction;

