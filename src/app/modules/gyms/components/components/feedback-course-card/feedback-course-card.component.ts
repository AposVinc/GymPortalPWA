import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../../state/app.states';
import {Observable} from 'rxjs';
import {selectFeedbacksByGymIdAndCourseId} from '../../../../../selectors/gym.selector';
import {DeleteAction, ShowAllAction} from '../../../../../actions/feedback-course.actions';
import {FeedbackCourse} from '../../../../../domain/FeedbackCourse';
import {selectPersonalFeedbackCourseByCourseId} from '../../../../../selectors/feedback.selector';
import {ActivatedRoute} from '@angular/router';
import {Utility} from '../../../../../helpers/utility';

@Component({
  selector: 'app-feedback-course-card',
  templateUrl: './feedback-course-card.component.html',
  styleUrls: ['./feedback-course-card.component.css']
})
export class FeedbackCourseCardComponent implements OnInit {

  idGym: number;
  idCourse: number;
  idPersonalFeedback: number;
  personalFeedback: Observable<FeedbackCourse>;
  feedbacks: Observable<FeedbackCourse[]>;

  constructor(private ar: ActivatedRoute, private store: Store<IAppState>, public utilityService: Utility) {
    this.idGym = +this.ar.snapshot.params.idGym;
    this.idCourse = +this.ar.snapshot.params.idCourse;
    this.personalFeedback = this.store.select(selectPersonalFeedbackCourseByCourseId(this.idCourse));
  }

  ngOnInit(): void {
    this.feedbacks = this.store.select(selectFeedbacksByGymIdAndCourseId(this.idGym, this.idCourse));
    this.store.dispatch( new ShowAllAction(this.idGym, this.idCourse) );

    this.personalFeedback.subscribe( f => {
      if (f !== undefined){
        this.idPersonalFeedback = f.id;
      }
    });

  }

  delete(feedback: FeedbackCourse) {
    // this.feedProfile.deleteFeedCourse(id, 'token').subscribe();
    this.store.dispatch( new DeleteAction(this.idGym, feedback));
    // window.location.reload();
  }

}
