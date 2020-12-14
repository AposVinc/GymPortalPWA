import { Action } from '@ngrx/store';
import {Course} from '../domain/Course';

export enum EFavoriteCourseActions {
  SHOW_ALL = '[FavoriteCourse] Show All',
  SHOW_ALL_SUCCESS = '[FavoriteCourse] Show All Success',
  SHOW_ALL_FAILURE = '[FavoriteCourse] Show All Failure',

  CREATE = '[FavoriteCourse] Create',
  CREATE_SUCCESS = '[FavoriteCourse] Create Success',
  CREATE_FAILURE = '[FavoriteCourse] Create Failure',

  DELETE = '[FavoriteCourse] Delete',
  DELETE_SUCCESS = '[FavoriteCourse] Delete Success',
  DELETE_FAILURE = '[FavoriteCourse] Delete Failure',
}

export class ShowAllFavoritesCourseAction implements Action {
  readonly type = EFavoriteCourseActions.SHOW_ALL;
}
export class ShowAllFavoritesCourseFailureAction implements Action {
  readonly type = EFavoriteCourseActions.SHOW_ALL_FAILURE;
}
export class ShowAllFavoritesCourseSuccessAction implements Action {
  readonly type = EFavoriteCourseActions.SHOW_ALL_SUCCESS;
  constructor(public payload: Course[]) {}
}

export class CreateFavoriteCourseAction implements Action {
  readonly type = EFavoriteCourseActions.CREATE;
  constructor(public course: Course) {}
}
export class CreateFavoriteCourseFailureAction implements Action {
  readonly type = EFavoriteCourseActions.CREATE_FAILURE;
}
export class CreateFavoriteCourseSuccessAction implements Action {
  readonly type = EFavoriteCourseActions.CREATE_SUCCESS;
  constructor(public payload: Course) {}
}

export class DeleteFavoriteCourseAction implements Action {
  readonly type = EFavoriteCourseActions.DELETE;
  constructor(public course: Course) {}
}
export class DeleteFavoriteCourseFailureAction implements Action {
  readonly type = EFavoriteCourseActions.DELETE_FAILURE;
}
export class DeleteFavoriteCourseSuccessAction implements Action {
  readonly type = EFavoriteCourseActions.DELETE_SUCCESS;
  constructor(public payload: Course) {}
}

export type ALL_FAVORITE_COURSE_REDUCER_ACTIONS =
  ShowAllFavoritesCourseAction | ShowAllFavoritesCourseFailureAction | ShowAllFavoritesCourseSuccessAction |
  CreateFavoriteCourseAction | CreateFavoriteCourseFailureAction | CreateFavoriteCourseSuccessAction |
  DeleteFavoriteCourseAction | DeleteFavoriteCourseFailureAction | DeleteFavoriteCourseSuccessAction;
