import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FeedbackGym} from '../../../../../domain/FeedbackGym';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../../state/app.states';
import {CreateAction, UpdateAction} from '../../../../../actions/feedback-gym.actions';
import {selectPersonalFeedbackGymByGymId} from '../../../../../selectors/feedback.selector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-feedback-gym-card',
  templateUrl: './add-feedback-gym-card.component.html',
  styleUrls: ['./add-feedback-gym-card.component.css']
})
export class AddFeedbackGymCardComponent implements OnInit {

  idGym: number;
  idExistingFeedback: number;
  personalFeedback: Observable<FeedbackGym>;
  feedbackForm: FormGroup;

  constructor(private ar: ActivatedRoute, private store: Store<IAppState>, private fb: FormBuilder) {
    this.idGym = +this.ar.snapshot.params.idGym;
    this.idExistingFeedback = 0;
    this.personalFeedback = this.store.select(selectPersonalFeedbackGymByGymId(this.idGym));
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
    const feedback: FeedbackGym = {...this.feedbackForm.value, gym: this.idGym};
    this.store.dispatch( new CreateAction(feedback));
  }

  update() {
    const feedbackUpdated: FeedbackGym = {...this.feedbackForm.value, gym: this.idGym, id: this.idExistingFeedback};
    this.store.dispatch( new UpdateAction(feedbackUpdated));
  }

}
