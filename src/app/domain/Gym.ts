import {Course} from './Course';
import {FeedbackGym} from './FeedbackGym';

export interface Gym {
  id: number;
  name: string;
  address: string;
  province: string;
  region: string;
  courses: Course[];
  feedbacks: FeedbackGym[];
}
