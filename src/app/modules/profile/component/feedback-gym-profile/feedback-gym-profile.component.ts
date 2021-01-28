import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {FeedbackGym} from '../../../../domain/FeedbackGym';
import {IAppState} from '../../../../state/app.states';
import {Utility} from '../../../../helpers/utility';
import {selectPersonalFeedbacksGym} from '../../../../selectors/feedback.selector';

@Component({
  selector: 'app-feedback-gym-profile',
  templateUrl: './feedback-gym-profile.component.html',
  styleUrls: ['./feedback-gym-profile.component.css']
})
export class FeedbackGymProfileComponent implements OnInit {

  feedbacks: Observable<FeedbackGym[]>;

  constructor(private store: Store<IAppState>, public utilityService: Utility) {
    // this.store.dispatch( new ShowAllForGymAction());
  }

  ngOnInit(): void {
    // this.feedProfile.findAllFedGym('token').subscribe(res => {
    //   this.feedbacks = res;
    // });
    this.feedbacks = this.store.select(selectPersonalFeedbacksGym);
  }

}
