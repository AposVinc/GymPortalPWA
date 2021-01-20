import * as fromActions from '../actions/feedback-profile.actions';
import * as fromActionsFeedbacksGym from '../actions/feedback-gym.actions';
import * as fromActionsFeedbacksCourse from '../actions/feedback-course.actions';
import * as fromCommonActions from '../actions/common.actions';
import {EFeedbackProfileActions} from '../actions/feedback-profile.actions';
import {EFeedbackGymActions} from '../actions/feedback-gym.actions';
import {EFeedbackCourseActions} from '../actions/feedback-course.actions';
import {ECommonActions} from '../actions/common.actions';
import { IFeedbackState, initialFeedbackState } from '../state/feedback.states';

export function feedbackReducer(state = initialFeedbackState,
                                action: fromActions.ALL_FEEDBACK_PROFILE_REDUCER_ACTIONS |
                                  fromActionsFeedbacksGym.ALL_FEEDBACK_GYM_REDUCER_ACTIONS |
                                  fromActionsFeedbacksCourse.ALL_FEEDBACK_COURSE_REDUCER_ACTIONS |
                                  fromCommonActions.ALL_COMMON_REDUCER_ACTIONS): IFeedbackState {
  switch (action.type) {
    case EFeedbackProfileActions.SHOW_ALL_FOR_GYM: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFeedbackProfileActions.SHOW_ALL_FOR_GYM_FAILURE: {
      return {
        ...state,
        feedbacksGym: [],
        loading: false,
      };
    }
    case EFeedbackProfileActions.SHOW_ALL_FOR_GYM_SUCCESS: {
      return {
        ...state,
        feedbacksGym: action.payload,
        loading: false,
      };
    }

    case EFeedbackProfileActions.SHOW_ALL_FOR_COURSE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFeedbackProfileActions.SHOW_ALL_FOR_COURSE_FAILURE: {
      return {
        ...state,
        feedbacksCourse: [],
        loading: false,
      };
    }
    case EFeedbackProfileActions.SHOW_ALL_FOR_COURSE_SUCCESS: {
      return {
        ...state,
        feedbacksCourse: action.payload,
        loading: false,
      };
    }

    // Feedbacks Gym
    case EFeedbackGymActions.CREATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFeedbackGymActions.CREATE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFeedbackGymActions.CREATE_SUCCESS: {
      return {
        ...state,
        feedbacksGym: [...state.feedbacksGym, action.payload],
        loading: false,
      };
    }

    case EFeedbackGymActions.UPDATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFeedbackGymActions.UPDATE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFeedbackGymActions.UPDATE_SUCCESS: {
      return {
        ...state,
        feedbacksGym: [...state.feedbacksGym]
          .map(feedback => ({...feedback}))
          .map(feedback => {
            if (feedback.id === action.payload.id) {
              return action.payload;
            } else {
              return {...feedback};
            }
          }),
        loading: false,
      };
    }

    case EFeedbackGymActions.DELETE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFeedbackGymActions.DELETE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFeedbackGymActions.DELETE_SUCCESS: {
      return {
        ...state,
        feedbacksGym: [...state.feedbacksGym].filter(f => f.id !== action.payload.id),
        loading: false,
      };
    }


    // Feedbacks Course
    case EFeedbackCourseActions.CREATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFeedbackCourseActions.CREATE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFeedbackCourseActions.CREATE_SUCCESS: {
      return {
        ...state,
        feedbacksCourse: [...state.feedbacksCourse, action.payload.feedback],
        loading: false,
      };
    }

    case EFeedbackCourseActions.UPDATE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFeedbackCourseActions.UPDATE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFeedbackCourseActions.UPDATE_SUCCESS: {
      return {
        ...state,
        feedbacksCourse: [...state.feedbacksCourse]
          .map(feedback => ({...feedback}))
          .map(feedback => {
            if (feedback.id === action.payload.feedback.id) {
              return action.payload.feedback;
            } else {
              return {...feedback};
            }
          }),
        loading: false,
      };
    }

    case EFeedbackCourseActions.DELETE: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFeedbackCourseActions.DELETE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFeedbackCourseActions.DELETE_SUCCESS: {
      return {
        ...state,
        feedbacksCourse: [...state.feedbacksCourse].filter(f => f.id !== action.payload.feedback.id),
        loading: false,
      };
    }

    case ECommonActions.LOGGED_OUT: {
      return {
        ...state,
        feedbacksGym: [],
        feedbacksCourse: [],
        loading: false,
      };
    }

    default:
      return state;
  }
}
