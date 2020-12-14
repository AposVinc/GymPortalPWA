import * as fromActionsGym from '../actions/gym.actions';
import * as fromActionsCourse from '../actions/course.actions';
import * as fromActionsFeedbacksGym from '../actions/feedback-gym.actions';
import * as fromActionsFeedbacksCourse from '../actions/feedback-course.actions';
import {IGymState, initialGymState} from '../state/gym.states';
import {EGymActions} from '../actions/gym.actions';
import {ECourseActions} from '../actions/course.actions';
import {EFeedbackGymActions} from '../actions/feedback-gym.actions';
import {EFeedbackCourseActions} from '../actions/feedback-course.actions';

export function gymReducer(state = initialGymState,
                           action: fromActionsGym.ALL_GYM_REDUCER_ACTIONS | fromActionsCourse.ALL_COURSE_REDUCER_ACTIONS |
                             fromActionsFeedbacksGym.ALL_FEEDBACK_GYM_REDUCER_ACTIONS | fromActionsFeedbacksCourse.ALL_FEEDBACK_COURSE_REDUCER_ACTIONS): IGymState {
  switch (action.type) {

    // Gym
    case EGymActions.SHOW_ALL: {
      return {
        ...state,
        loading: true,
      };
    }
    case EGymActions.SHOW_ALL_FAILURE: {
      return {
        ...state,
        gyms: null,
        loading: false,
      };
    }
    case EGymActions.SHOW_ALL_SUCCESS: {
      return {
        ...state,
        gyms: action.payload,
        loading: false,
      };
    }

    case EGymActions.GET_GYM: {
      return {
        ...state,
        loading: true,
      };
    }
    case EGymActions.GET_GYM_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EGymActions.GET_GYM_SUCCESS: {
      return {
        ...state,
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.id) {
              return action.payload;
            } else {
              return {...gym};
            }
          }),
        loading: false,
      };
    }


    // Feedbacks Gym
    case EFeedbackGymActions.SHOW_ALL: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFeedbackGymActions.SHOW_ALL_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFeedbackGymActions.SHOW_ALL_SUCCESS: {
      return {
        ...state,
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.idGym) {
              return {
                ...gym,
                feedbacks: action.payload.feedbacks
              };
            } else {
              return {...gym};
            }
          }),
        loading: false,
      };
    }

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
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.gym) {
              return {
                ...gym,
                feedbacks: [...gym.feedbacks, action.payload]
              };
            } else {
              return {...gym};
            }
          }),
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
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.gym) {
              return {
                ...gym,
                feedbacks: [...gym.feedbacks]
                  .map(feedback => ({...feedback}))
                  .map(feedback => {
                      if (feedback.id === action.payload.id) {
                        return action.payload;
                      } else {
                        return {...feedback};
                      }
                    }
                  )
              };
            } else {
              return {...gym};
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
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.gym) {
              return {
                ...gym,
                feedbacks: [...gym.feedbacks].filter(f => f.id !== action.payload.id),
              };
            } else {
              return {...gym};
            }
          }),
        loading: false,
      };
    }


    // Course
    case ECourseActions.SHOW_ALL: {
      return {
        ...state,
        loading: true,
      };
    }
    case ECourseActions.SHOW_ALL_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case ECourseActions.SHOW_ALL_SUCCESS: {
      return {
        ...state,
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.idGym) {
              return {
                ...gym,
                courses: action.payload.courses
              };
            } else {
              return {...gym};
            }
          }),
        loading: false,
      };
    }
    case ECourseActions.GET_COURSE: {
      return {
        ...state,
        loading: true,
      };
    }
    case ECourseActions.GET_COURSE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case ECourseActions.GET_COURSE_SUCCESS: {
      return {
        ...state,
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.gym) {
              return {
                ...gym,
                courses: [...gym.courses]
                  .map(course => ({...course}))
                  .map(course => {
                    if (course.id === action.payload.id){
                      return action.payload;
                    } else {
                      return {...course};
                    }
                  })
              };
            } else {
              return {...gym};
            }
          }),
        loading: false,
      };
    }


    // Feedbacks Course
    case EFeedbackCourseActions.SHOW_ALL: {
      return {
        ...state,
        loading: true,
      };
    }
    case EFeedbackCourseActions.SHOW_ALL_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case EFeedbackCourseActions.SHOW_ALL_SUCCESS: {
      return {
        ...state,
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.idGym) {
              return {
                ...gym,
                courses: [...gym.courses]
                  .map(course => ({...course}))
                  .map(course => {
                    if (course.id === action.payload.idCourse){
                      return {
                        ...course,
                        feedbacks: action.payload.feedbacks
                      };
                    } else {
                      return {...course};
                    }
                  })
              };
            } else {
              return {...gym};
            }
          }),
        loading: false,
      };
    }

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
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.idGym) {
              return {
                ...gym,
                courses: [...gym.courses]
                  .map(course => ({...course}))
                  .map(course => {
                    if (course.id === action.payload.feedback.course){
                      return {
                        ...course,
                        feedbacks: [...course.feedbacks, action.payload.feedback]
                      };
                    } else {
                      return {...course};
                    }
                  })
              };
            } else {
              return {...gym};
            }
          }),
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
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.idGym) {
              return {
                ...gym,
                courses: [...gym.courses]
                  .map(course => ({...course}))
                  .map(course => {
                    if (course.id === action.payload.feedback.course){
                      return {
                        ...course,
                        feedbacks: [...course.feedbacks]
                          .map(feedback => ({...feedback}))
                          .map(feedback => {
                              if (feedback.id === action.payload.feedback.id) {
                                return action.payload.feedback;
                              } else {
                                return {...feedback};
                              }
                            }
                          )
                      };
                    } else {
                      return {...course};
                    }
                  })
              };
            } else {
              return {...gym};
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
        gyms: [...state.gyms]
          .map(gym => ({...gym}))
          .map(gym => {
            if (gym.id === action.payload.idGym) {
              return {
                ...gym,
                courses: [...gym.courses]
                  .map(course => ({...course}))
                  .map(course => {
                    if (course.id === action.payload.feedback.course){
                      return {
                        ...course,
                        feedbacks: [...course.feedbacks].filter(f => f.id !== action.payload.feedback.id),
                      };
                    } else {
                      return {...course};
                    }
                  })
              };
            } else {
              return {...gym};
            }
          }),
        loading: false,
      };
    }

    default:
      return state;
  }
}
