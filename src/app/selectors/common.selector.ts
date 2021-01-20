import {createSelector} from '@ngrx/store';
import {IAppState} from '../state/app.states';
import {ICommonState} from '../state/common.states';

const selectCommon = (state: IAppState) => {
  return state.commonState;
};

export const selectCommonLogged = createSelector(
  selectCommon,
  (state: ICommonState) => {
    return state.logged;
  }
);
