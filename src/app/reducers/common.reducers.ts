import * as fromActions from '../actions/common.actions';
import {ICommonState, initialCommonState} from '../state/common.states';
import {ECommonActions} from '../actions/common.actions';

export function commonReducer(state = initialCommonState, action: fromActions.ALL_COMMON_REDUCER_ACTIONS): ICommonState {
  switch (action.type) {
    case ECommonActions.LOGGED_IN: {
      return {
        ...state,
        logged: true,
      };
    }
    case ECommonActions.LOGGED_OUT: {
      return {
        ...state,
        logged: false,
      };
    }
    default:
      return state;
  }
}
