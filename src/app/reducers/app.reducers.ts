import {ActionReducer, ActionReducerMap} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';
import {commonReducer} from './common.reducers';
import {userReducer} from './user.reducers';
import {gymReducer} from './gym.reducers';
import {favoriteReducer} from './favorite.reducers';
import {feedbackReducer} from './feedback.reducers';
import {IAppState} from '../state/app.states';

export const appReducers: ActionReducerMap<IAppState, any> = {
  commonState: commonReducer,
  userState: userReducer,
  gymState: gymReducer,
  favoriteState: favoriteReducer,
  feedbackState: feedbackReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['commonState', 'userState', 'favoriteState', 'feedbackState', 'gymState'], rehydrate: true})(reducer);
}
