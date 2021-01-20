import {Action} from '@ngrx/store';
import {Course} from '../domain/Course';

export enum ECourseActions {
  SHOW_ALL = '[Course] Show All',
  SHOW_ALL_FAILURE = '[Course] Show All Failure',
  SHOW_ALL_SUCCESS = '[Course] Show All Success',

  GET_COURSE = '[Course] Get Course',
  GET_COURSE_FAILURE = '[Course] Get Course Failure',
  GET_COURSE_SUCCESS = '[Course] Get Course Success',
}

export class ShowAllAction implements Action {
  readonly type = ECourseActions.SHOW_ALL;
  constructor(public idGym: number) {}
}
export class ShowAllFailureAction implements Action {
  readonly type = ECourseActions.SHOW_ALL_FAILURE;
}
export class ShowAllSuccessAction implements Action {
  readonly type = ECourseActions.SHOW_ALL_SUCCESS;
  constructor(public payload: { idGym: number, courses: Course[] }) {}
}

export class GetCourseAction implements Action {
  readonly type = ECourseActions.GET_COURSE;
  constructor(public idGym: number, public idCourse: number) {}
}
export class GetCourseFailureAction implements Action {
  readonly type = ECourseActions.GET_COURSE_FAILURE;
}
export class GetCourseSuccessAction implements Action {
  readonly type = ECourseActions.GET_COURSE_SUCCESS;
  constructor(public payload: Course) {}
}

export type ALL_COURSE_REDUCER_ACTIONS =
  ShowAllAction | ShowAllFailureAction | ShowAllSuccessAction |
  GetCourseAction | GetCourseFailureAction | GetCourseSuccessAction;

