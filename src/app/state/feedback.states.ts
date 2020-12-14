import {FeedbackGym} from '../domain/FeedbackGym';
import {FeedbackCourse} from '../domain/FeedbackCourse';

export interface IFeedbackState {
  feedbacksGym: FeedbackGym[];
  feedbacksCourse: FeedbackCourse[];
  loading: boolean;
}

export const initialFeedbackState: IFeedbackState = {
  feedbacksGym: [],
  feedbacksCourse: [],
  loading: false,
};
