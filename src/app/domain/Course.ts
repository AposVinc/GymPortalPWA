import {FeedbackCourse} from './FeedbackCourse';

export interface Course {
  id: number;
  description: string;
  name: string;
  gym: number;
  feedbacks: FeedbackCourse[];
}
