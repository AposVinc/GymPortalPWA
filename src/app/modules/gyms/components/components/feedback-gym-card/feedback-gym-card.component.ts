import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../../state/app.states';
import {FeedbackGym} from '../../../../../domain/FeedbackGym';
import {selectFeedbacksByGymId} from '../../../../../selectors/gym.selector';
import {Observable} from 'rxjs';
import {DeleteAction, ShowAllAction} from '../../../../../actions/feedback-gym.actions';
import {selectPersonalFeedbackGymByGymId} from '../../../../../selectors/feedback.selector';
import {ActivatedRoute} from '@angular/router';
import {UtilityService} from '../../../../../services/utility/utility.service';

@Component({
  selector: 'app-feedback-gym-card',
  templateUrl: './feedback-gym-card.component.html',
  styleUrls: ['./feedback-gym-card.component.css']
})
export class FeedbackGymCardComponent implements OnInit {

  idGym: number;
  idPersonalFeedback: number;
  personalFeedback: Observable<FeedbackGym>;
  feedbacks: Observable<FeedbackGym[]>;

  constructor(private ar: ActivatedRoute, private store: Store<IAppState>, public utilityService: UtilityService) {
    this.idGym = +this.ar.snapshot.params.idGym;
    this.personalFeedback = this.store.select(selectPersonalFeedbackGymByGymId(this.idGym));
  }

  ngOnInit(): void {
    this.feedbacks = this.store.select(selectFeedbacksByGymId(this.idGym));
    this.store.dispatch( new ShowAllAction(this.idGym) );

    this.personalFeedback.subscribe( f => {
      if (f !== undefined){
        this.idPersonalFeedback = f.id;
      }
    });
  }

  delete(feedback: FeedbackGym) {
    // this.feedProfile.deleteFeedGym(id, 'token').subscribe();
    this.store.dispatch( new DeleteAction(feedback));
    // window.location.reload();
  }

}
