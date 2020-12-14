import { Action } from '@ngrx/store';
import {FeedbackGym} from '../domain/FeedbackGym';

export enum EFeedbackGymActions {
  SHOW_ALL = '[FeedbackGym] Show All',
  SHOW_ALL_SUCCESS = '[FeedbackGym] Show All Success',
  SHOW_ALL_FAILURE = '[FeedbackGym] Show All Failure',

  CREATE = '[FeedbackGym] Create',
  CREATE_SUCCESS = '[FeedbackGym] Create Success',
  CREATE_FAILURE = '[FeedbackGym] Create Failure',

  UPDATE = '[FeedbackGym] Update',
  UPDATE_SUCCESS = '[FeedbackGym] Update Success',
  UPDATE_FAILURE = '[FeedbackGym] Update Failure',

  DELETE = '[FeedbackGym] Delete',
  DELETE_SUCCESS = '[FeedbackGym] Delete Success',
  DELETE_FAILURE = '[FeedbackGym] Delete Failure',
}

export class ShowAllAction implements Action {
  readonly type = EFeedbackGymActions.SHOW_ALL;
  constructor(public idGym: number) {}
}
export class ShowAllFailureAction implements Action {
  readonly type = EFeedbackGymActions.SHOW_ALL_FAILURE;
}
export class ShowAllSuccessAction implements Action {
  readonly type = EFeedbackGymActions.SHOW_ALL_SUCCESS;
  constructor(public payload: { idGym: number, feedbacks: FeedbackGym[] }) {}
}

export class CreateAction implements Action {
  readonly type = EFeedbackGymActions.CREATE;
  constructor(public feedback: FeedbackGym) {}
}
export class CreateFailureAction implements Action {
  readonly type = EFeedbackGymActions.CREATE_FAILURE;
}
export class CreateSuccessAction implements Action {
  readonly type = EFeedbackGymActions.CREATE_SUCCESS;
  constructor(public payload: FeedbackGym) {}
}

export class UpdateAction implements Action {
  readonly type = EFeedbackGymActions.UPDATE;
  constructor(public feedback: FeedbackGym) {}
}
export class UpdateFailureAction implements Action {
  readonly type = EFeedbackGymActions.UPDATE_FAILURE;
}
export class UpdateSuccessAction implements Action {
  readonly type = EFeedbackGymActions.UPDATE_SUCCESS;
  constructor(public payload: FeedbackGym) {}
}

export class DeleteAction implements Action {
  readonly type = EFeedbackGymActions.DELETE;
  constructor(public feedback: FeedbackGym) {}
}
export class DeleteFailureAction implements Action {
  readonly type = EFeedbackGymActions.DELETE_FAILURE;
}
export class DeleteSuccessAction implements Action {
  readonly type = EFeedbackGymActions.DELETE_SUCCESS;
  constructor(public payload: FeedbackGym) {}
}

export type ALL_FEEDBACK_GYM_REDUCER_ACTIONS =
  ShowAllAction| ShowAllFailureAction | ShowAllSuccessAction |
  CreateAction | CreateFailureAction | CreateSuccessAction |
  UpdateAction | UpdateFailureAction | UpdateSuccessAction |
  DeleteAction | DeleteFailureAction | DeleteSuccessAction ;

