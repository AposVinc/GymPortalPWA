import {createSelector} from '@ngrx/store';
import {IAppState} from '../state/app.states';
import {IGymState} from '../state/gym.states';

const selectGym = (state: IAppState) => {
  return state.gymState;
};

export const selectGymList = createSelector(
  selectGym,
  (state: IGymState) => {
    return state.gyms;
  }
);

export const selectGymById = (idGym: number) => createSelector(
  selectGym,
  (state: IGymState) => {
    return state.gyms.find(el => el.id === idGym);
  }
);

export const selectFeedbacksByGymId = (idGym: number) => createSelector(
  selectGym,
  (state: IGymState) => {
    return state.gyms.find(el => el.id === idGym).feedbacks;
  }
);

export const selectCourseListByGymId = (idGym: number) => createSelector(
  selectGym,
  (state: IGymState) => {
    return state.gyms.find(el => el.id === idGym).courses;
  }
);

export const selectCourseByGymIdAndCourseId = (idGym: number, idCourse: number) => createSelector(
  selectGym,
  (state: IGymState) => {
    return state.gyms.find(el => el.id === idGym).courses.find(el => el.id === idCourse);
  }
);

export const selectFeedbacksByGymIdAndCourseId = (idGym: number, idCourse: number) => createSelector(
  selectGym,
  (state: IGymState) => {
    return state.gyms.find(el => el.id === idGym).courses.find(el => el.id === idCourse).feedbacks;
  }
);
