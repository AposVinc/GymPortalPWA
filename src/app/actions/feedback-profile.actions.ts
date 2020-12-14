import { Action } from '@ngrx/store';
import {FeedbackGym} from '../domain/FeedbackGym';
import {FeedbackCourse} from '../domain/FeedbackCourse';

export enum EFeedbackProfileActions {
  SHOW_ALL_FOR_GYM = '[FeedbackProfile] Show All For Gym',
  SHOW_ALL_FOR_GYM_SUCCESS = '[FeedbackProfile] Show All For Gym Success',
  SHOW_ALL_FOR_GYM_FAILURE = '[FeedbackProfile] Show All For Gym Failure',

  SHOW_ALL_FOR_COURSE = '[FeedbackProfile] Show All For Course',
  SHOW_ALL_FOR_COURSE_SUCCESS = '[FeedbackProfile] Show All For Course Success',
  SHOW_ALL_FOR_COURSE_FAILURE = '[FeedbackProfile] Show All For Course Failure',
}

export class ShowAllForGymAction implements Action {
  readonly type = EFeedbackProfileActions.SHOW_ALL_FOR_GYM;
}
export class ShowAllForGymFailureAction implements Action {
  readonly type = EFeedbackProfileActions.SHOW_ALL_FOR_GYM_FAILURE;
}
export class ShowAllForGymSuccessAction implements Action {
  readonly type = EFeedbackProfileActions.SHOW_ALL_FOR_GYM_SUCCESS;
  constructor(public payload: FeedbackGym[]) {}
}

export class ShowAllForCourseAction implements Action {
  readonly type = EFeedbackProfileActions.SHOW_ALL_FOR_COURSE;
}
export class ShowAllForCourseFailureAction implements Action {
  readonly type = EFeedbackProfileActions.SHOW_ALL_FOR_COURSE_FAILURE;
}
export class ShowAllForCourseSuccessAction implements Action {
  readonly type = EFeedbackProfileActions.SHOW_ALL_FOR_COURSE_SUCCESS;
  constructor(public payload: FeedbackCourse[]) {}
}


export type ALL_FEEDBACK_PROFILE_REDUCER_ACTIONS =
  ShowAllForGymAction| ShowAllForGymFailureAction | ShowAllForGymSuccessAction |
  ShowAllForCourseAction| ShowAllForCourseFailureAction | ShowAllForCourseSuccessAction;

