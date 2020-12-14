import {ICommonState} from './common.states';
import {IUserState} from './user.states';
import {IGymState} from './gym.states';
import {IFavoriteState} from './favorite.states';
import {IFeedbackState} from './feedback.states';

export interface IAppState {
  commonState: ICommonState;
  userState: IUserState;
  gymState: IGymState;
  favoriteState: IFavoriteState;
  feedbackState: IFeedbackState;
}


