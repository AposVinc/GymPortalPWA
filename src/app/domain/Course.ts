import {FeedbackCourse} from './FeedbackCourse';
export interface Course {
  id: number;
  description: string;
  name: string;
  gym: number;
  feedbacks: FeedbackCourse[];
}

export class ICourse implements Course{
  id: number;
  description: string;
  name: string;
  gym: number;
  feedbacks: FeedbackCourse[];

  constructor() {
    this.name = '';
    this.description = '';
    this.gym = 0;
  }

}
