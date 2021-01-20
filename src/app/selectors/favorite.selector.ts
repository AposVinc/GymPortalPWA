import {createSelector} from '@ngrx/store';
import {IAppState} from '../state/app.states';
import {IFavoriteState} from '../state/favorite.states';

const selectFavorites = (state: IAppState) => {
  return state.favoriteState;
};

export const selectFavoritesGym = createSelector(
  selectFavorites,
  (state: IFavoriteState) => {
    return state.gyms;
  }
);

export const selectFavoriteGymByGymId = (idGym: number) => createSelector(
  selectFavorites,
  (state: IFavoriteState) => {
    return state.gyms.find((g) => g.id === idGym);
  }
);

export const selectFavoritesCourse = createSelector(
  selectFavorites,
  (state: IFavoriteState) => {
    return state.courses;
  }
);

export const selectFavoriteCourseByCourseId = (idCourse: number) => createSelector(
  selectFavorites,
  (state: IFavoriteState) => {
    return state.courses.find((c) => c.id === idCourse);
  }
);
