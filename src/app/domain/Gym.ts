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

export class IGym implements Gym{
  id: number;
  name: string;
  address: string;
  province: string;
  region: string;
  courses: Course[];
  feedbacks: FeedbackGym[];

  constructor() {
    this.name = '';
    this.address = '';
    this.province = '';
    this.region = '';
  }
}
