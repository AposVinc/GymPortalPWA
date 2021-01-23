import {FeedbackCourse} from './FeedbackCourse';
export interface Course {
  id: number;
  code: string;
  description: string;
  name: string;
  gym: number;
  feedbacks: FeedbackCourse[];
}

export class ICourse implements Course{
  id: number;
  code: string;
  description: string;
  name: string;
  gym: number;
  feedbacks: FeedbackCourse[];

  constructor() {
    this.name = '';
    this.code = '';
    this.description = '';
    this.gym = 0;
  }

}
