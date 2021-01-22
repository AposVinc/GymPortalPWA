import * as fromActions from '../actions/user.actions';
import {EUserActions} from '../actions/user.actions';
import {initialUserState, IUserState} from '../state/user.states';

export function userReducer(state = initialUserState, action: fromActions.ALL_USER_REDUCER_ACTIONS): IUserState {
  switch (action.type) {
    case EUserActions.LOGIN: {
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    }
    case EUserActions.LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case EUserActions.LOGIN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        loading: false,
        errorMessage: null
      };
    }

    case EUserActions.REGISTER: {
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    }
    case EUserActions.REGISTER_FAILURE: {
      return {
        ...state,
        loading: false,
        errorMessage: 'That email/username are already in use.'
      };
    }
    case EUserActions.REGISTER_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        loading: false,
        errorMessage: null
      };
    }

    case EUserActions.REFRESH_DETAIL: {
      return {
        ...state,
        loading: true,
      };
    }
    case EUserActions.REFRESH_DETAIL_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EUserActions.REFRESH_DETAIL_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }

    case EUserActions.TOKEN_REFRESH: {
      return {
        ...state,
        loading: true,
      };
    }
    case EUserActions.TOKEN_REFRESH_FAILURE: {
      return {
        ...state,
        user: null,
        loading: false,
      };
    }
    case EUserActions.TOKEN_REFRESH_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    }


    case EUserActions.UPDATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EUserActions.UPDATE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EUserActions.UPDATE_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    }

    case EUserActions.LOGOUT: {
      return {
        ...state,
        user: null,
        token: '',
        loading: false,
        errorMessage: null
      };
    }

    default:
      return state;
  }
}
