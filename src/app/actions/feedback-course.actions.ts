import {Action} from '@ngrx/store';
import {FeedbackCourse} from '../domain/FeedbackCourse';

export enum EFeedbackCourseActions {
  SHOW_ALL = '[FeedbackCourse] Show All',
  SHOW_ALL_SUCCESS = '[FeedbackCourse] Show All Success',
  SHOW_ALL_FAILURE = '[FeedbackCourse] Show All Failure',

  CREATE = '[FeedbackCourse] Create',
  CREATE_SUCCESS = '[FeedbackCourse] Create Success',
  CREATE_FAILURE = '[FeedbackCourse] Create Failure',

  UPDATE = '[FeedbackCourse] Update',
  UPDATE_SUCCESS = '[FeedbackCourse] Update Success',
  UPDATE_FAILURE = '[FeedbackCourse] Update Failure',

  DELETE = '[FeedbackCourse] Delete',
  DELETE_SUCCESS = '[FeedbackCourse] Delete Success',
  DELETE_FAILURE = '[FeedbackCourse] Delete Failure',
}

export class ShowAllAction implements Action {
  readonly type = EFeedbackCourseActions.SHOW_ALL;
  constructor(public idGym: number, public idCourse: number) {}
}
export class ShowAllFailureAction implements Action {
  readonly type = EFeedbackCourseActions.SHOW_ALL_FAILURE;
}
export class ShowAllSuccessAction implements Action {
  readonly type = EFeedbackCourseActions.SHOW_ALL_SUCCESS;
  constructor(public payload: { idGym: number, idCourse: number, feedbacks: FeedbackCourse[] }) {}
}

export class CreateAction implements Action {
  readonly type = EFeedbackCourseActions.CREATE;
  constructor(public idGym: number, public feedback: FeedbackCourse) {}
}
export class CreateFailureAction implements Action {
  readonly type = EFeedbackCourseActions.CREATE_FAILURE;
}
export class CreateSuccessAction implements Action {
  readonly type = EFeedbackCourseActions.CREATE_SUCCESS;
  constructor(public payload: { idGym: number, feedback: FeedbackCourse }) {}
}

export class UpdateAction implements Action {
  readonly type = EFeedbackCourseActions.UPDATE;
  constructor(public idGym: number, public feedback: FeedbackCourse) {}
}
export class UpdateFailureAction implements Action {
  readonly type = EFeedbackCourseActions.UPDATE_FAILURE;
}
export class UpdateSuccessAction implements Action {
  readonly type = EFeedbackCourseActions.UPDATE_SUCCESS;
  constructor(public payload: { idGym: number, feedback: FeedbackCourse }) {}
}

export class DeleteAction implements Action {
  readonly type = EFeedbackCourseActions.DELETE;
  constructor(public idGym: number, public feedback: FeedbackCourse) {}
}
export class DeleteFailureAction implements Action {
  readonly type = EFeedbackCourseActions.DELETE_FAILURE;
}
export class DeleteSuccessAction implements Action {
  readonly type = EFeedbackCourseActions.DELETE_SUCCESS;
  constructor(public payload: { idGym: number, feedback: FeedbackCourse}) {}
}

export type ALL_FEEDBACK_COURSE_REDUCER_ACTIONS =
  ShowAllAction| ShowAllFailureAction | ShowAllSuccessAction |
  CreateAction | CreateFailureAction | CreateSuccessAction |
  UpdateAction | UpdateFailureAction | UpdateSuccessAction |
  DeleteAction | DeleteFailureAction | DeleteSuccessAction ;

