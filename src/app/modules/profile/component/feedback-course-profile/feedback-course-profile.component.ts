import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {FeedbackCourse} from '../../../../domain/FeedbackCourse';
import {IAppState} from '../../../../state/app.states';
import {Utility} from '../../../../helpers/utility';
import {selectPersonalFeedbacksCourse} from '../../../../selectors/feedback.selector';

@Component({
  selector: 'app-feedback-course-profile',
  templateUrl: './feedback-course-profile.component.html',
  styleUrls: ['./feedback-course-profile.component.css']
})
export class FeedbackCourseProfileComponent implements OnInit {

  feedbacks: Observable<FeedbackCourse[]>;

  constructor(private store: Store<IAppState>, public utilityService: Utility) {
    // this.store.dispatch( new ShowAllForCourseAction());
  }

  ngOnInit(): void {
    // this.feedProfile.findAllFedCourse('token').subscribe(res => {
    //   this.feedbacks = res;
    // });
    this.feedbacks = this.store.select(selectPersonalFeedbacksCourse);
  }

}
