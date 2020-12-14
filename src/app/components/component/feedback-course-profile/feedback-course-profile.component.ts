import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {selectPersonalFeedbacksCourse} from '../../../selectors/feedback.selector';
import {Observable} from 'rxjs';
import {ShowAllForCourseAction} from '../../../actions/feedback-profile.actions';
import {FeedbackCourse} from '../../../domain/FeedbackCourse';
import {DeleteAction} from '../../../actions/feedback-course.actions';
import {selectCourseById} from '../../../selectors/gym.selector';
import {map} from 'rxjs/operators';
import {Course} from '../../../domain/Course';
import {GetCourseAction} from '../../../actions/course.actions';

@Component({
  selector: 'app-feedback-course-profile',
  templateUrl: './feedback-course-profile.component.html',
  styleUrls: ['./feedback-course-profile.component.css']
})
export class FeedbackCourseProfileComponent implements OnInit {

  feedbacks: Observable<FeedbackCourse[]>;

  constructor(private store: Store<IAppState>) {
    // this.store.dispatch( new ShowAllForCourseAction());
  }

  ngOnInit(): void {
    // this.feedProfile.findAllFedCourse('token').subscribe(res => {
    //   this.feedbacks = res;
    // });
    this.feedbacks = this.store.select(selectPersonalFeedbacksCourse);
  }

}
