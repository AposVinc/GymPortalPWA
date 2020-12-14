import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.states';
import {IFeedbackState} from '../state/feedback.states';

const selectFeedbacks = (state: IAppState) => {
  return state.feedbackState;
};

export const selectPersonalFeedbacksGym = createSelector(
  selectFeedbacks,
  (state: IFeedbackState) => {
    return state.feedbacksGym;
  }
);

export const selectPersonalFeedbackGymByGymId = (idGym: number) => createSelector(
  selectFeedbacks,
  (state: IFeedbackState) => {
    return state.feedbacksGym.find((f) => f.gym === idGym);
  }
);

export const selectPersonalFeedbacksCourse = createSelector(
  selectFeedbacks,
  (state: IFeedbackState) => {
    return state.feedbacksCourse;
  }
);

export const selectPersonalFeedbackCourseByCourseId = (idCourse: number) => createSelector(
  selectFeedbacks,
  (state: IFeedbackState) => {
    return state.feedbacksCourse.find((f) => f.course === idCourse);
  }
);
