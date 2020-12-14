import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.states';
import {IUserState} from '../state/user.states';

const selectUser = (state: IAppState) => {
  return state.userState;
};

export const selectUserDetail = createSelector(
  selectUser,
  (state: IUserState) => {
    return state.user;
  }
);

export const selectUserToken = createSelector(
  selectUser,
  (state: IUserState) => {
    return state.token;
  }
);
