import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FeedbackCourse} from '../../../domain/FeedbackCourse';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {selectPersonalFeedbackCourseByCourseId} from '../../../selectors/feedback.selector';
import {CreateAction, UpdateAction} from '../../../actions/feedback-course.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-feedback-course',
  templateUrl: './add-feedback-course.component.html',
  styleUrls: ['./add-feedback-course.component.css']
})
export class AddFeedbackCourseComponent implements OnInit {

  idGym: number;
  idCourse: number;
  idExistingFeedback: number;
  personalFeedback: Observable<FeedbackCourse>;
  feedbackForm: FormGroup;

  constructor(private store: Store<IAppState>, private ar: ActivatedRoute, private fb: FormBuilder) {
    this.idGym = +this.ar.snapshot.params.idGym;
    this.idCourse = +this.ar.snapshot.params.idCourse;
    this.idExistingFeedback = 0;
    this.personalFeedback = this.store.select(selectPersonalFeedbackCourseByCourseId(this.idCourse));
    this.feedbackForm = this.fb.group({
      feed: ['', [Validators.required]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  ngOnInit(): void {
    this.personalFeedback.subscribe(
      (f) => {
        if (f !== undefined) {
          this.feedbackForm.patchValue(f);
          this.idExistingFeedback = f.id;
        }
      }
    );
  }

  onSubmit(){
    if (this.idExistingFeedback === 0){
      this.save();
    } else {
      this.update();
    }
  }

  save() {
    const feedback: FeedbackCourse = {...this.feedbackForm.value, course: this.idCourse};
    this.store.dispatch( new CreateAction(this.idGym, feedback));
  }

  update() {
    const feedbackUpdated: FeedbackCourse = {...this.feedbackForm.value, course: this.idCourse, id: this.idExistingFeedback};
    this.store.dispatch( new UpdateAction(this.idGym, feedbackUpdated));
  }

}
