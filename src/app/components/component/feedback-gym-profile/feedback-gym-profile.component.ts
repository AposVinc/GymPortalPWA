import {Component, OnInit} from '@angular/core';
import {FeedbackGym} from '../../../domain/FeedbackGym';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {selectPersonalFeedbacksGym} from '../../../selectors/feedback.selector';
import {Observable} from 'rxjs';
import {ShowAllForGymAction} from '../../../actions/feedback-profile.actions';
import {Utility} from '../../../helpers/utility';

@Component({
  selector: 'app-feedback-gym-profile',
  templateUrl: './feedback-gym-profile.component.html',
  styleUrls: ['./feedback-gym-profile.component.css']
})
export class FeedbackGymProfileComponent implements OnInit {

  feedbacks: Observable<FeedbackGym[]>;

  constructor(private store: Store<IAppState>, public utilityService: Utility) {
    this.store.dispatch( new ShowAllForGymAction());
  }

  ngOnInit(): void {
    // this.feedProfile.findAllFedGym('token').subscribe(res => {
    //   this.feedbacks = res;
    // });
    this.feedbacks = this.store.select(selectPersonalFeedbacksGym);
  }

}
