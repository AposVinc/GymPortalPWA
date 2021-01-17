import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {selectPersonalFeedbacksCourse} from '../../../selectors/feedback.selector';
import {Observable} from 'rxjs';
import {ShowAllForCourseAction} from '../../../actions/feedback-profile.actions';
import {FeedbackCourse} from '../../../domain/FeedbackCourse';
import {UtilityService} from '../../../services/utility/utility.service';

@Component({
  selector: 'app-feedback-course-profile',
  templateUrl: './feedback-course-profile.component.html',
  styleUrls: ['./feedback-course-profile.component.css']
})
export class FeedbackCourseProfileComponent implements OnInit {

  feedbacks: Observable<FeedbackCourse[]>;

  constructor(private store: Store<IAppState>, public utilityService: UtilityService) {
    this.store.dispatch( new ShowAllForCourseAction());
  }

  ngOnInit(): void {
    // this.feedProfile.findAllFedCourse('token').subscribe(res => {
    //   this.feedbacks = res;
    // });
    this.feedbacks = this.store.select(selectPersonalFeedbacksCourse);
  }

}
