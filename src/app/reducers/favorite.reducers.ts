import * as fromFavoriteGymActions from '../actions/favorite-gym.actions';
import {EFavoriteGymActions} from '../actions/favorite-gym.actions';
import * as fromFavoriteCourseActions from '../actions/favorite-course.actions';
import {EFavoriteCourseActions} from '../actions/favorite-course.actions';
import * as fromCommonActions from '../actions/common.actions';
import {ECommonActions} from '../actions/common.actions';
import {IFavoriteState, initialFavoriteState} from '../state/favorite.states';

export function favoriteReducer(state = initialFavoriteState,
                                action: fromFavoriteGymActions.ALL_FAVORITE_GYM_REDUCER_ACTIONS |
                                  fromFavoriteCourseActions.ALL_FAVORITE_COURSE_REDUCER_ACTIONS |
                                  fromCommonActions.ALL_COMMON_REDUCER_ACTIONS): IFavoriteState {
  switch (action.type) {

    // Gym
    case EFavoriteGymActions.SHOW_ALL: {
      return {
        ...state,
        loading: false
      };
    }
    case EFavoriteGymActions.SHOW_ALL_FAILURE: {
      return {
        ...state,
        gyms: [],
        loading: false,
      };
    }
    case EFavoriteGymActions.SHOW_ALL_SUCCESS: {
      return {
        ...state,
        gyms: action.payload,
        loading: false,
      };
    }

    case EFavoriteGymActions.CREATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFavoriteGymActions.CREATE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFavoriteGymActions.CREATE_SUCCESS: {
      return {
        ...state,
        gyms: [...state.gyms, action.payload],
        loading: false,
      };
    }

    case EFavoriteGymActions.DELETE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFavoriteGymActions.DELETE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFavoriteGymActions.DELETE_SUCCESS: {
      return {
        ...state,
        gyms: [...state.gyms].filter(g => g.id !== action.payload.id),
        loading: false,
      };
    }


    // Course
    case EFavoriteCourseActions.SHOW_ALL: {
      return {
        ...state,
        loading: false
      };
    }
    case EFavoriteCourseActions.SHOW_ALL_FAILURE: {
      return {
        ...state,
        courses: [],
        loading: false,
      };
    }
    case EFavoriteCourseActions.SHOW_ALL_SUCCESS: {
      return {
        ...state,
        courses: action.payload,
        loading: false,
      };
    }

    case EFavoriteCourseActions.CREATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFavoriteCourseActions.CREATE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFavoriteCourseActions.CREATE_SUCCESS: {
      return {
        ...state,
        courses: [...state.courses, action.payload],
        loading: false,
      };
    }

    case EFavoriteCourseActions.DELETE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFavoriteCourseActions.DELETE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFavoriteCourseActions.DELETE_SUCCESS: {
      return {
        ...state,
        courses: [...state.courses].filter(c => c.id !== action.payload.id),
        loading: false,
      };
    }

    case ECommonActions.LOGGED_OUT: {
      return {
        ...state,
        gyms: [],
        courses: [],
        loading: false,
      };
    }

    default:
      return state;
  }
}
