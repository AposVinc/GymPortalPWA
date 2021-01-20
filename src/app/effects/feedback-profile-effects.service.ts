import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {catchError, switchMap, withLatestFrom} from 'rxjs/operators';
import {
  EFeedbackProfileActions,
  ShowAllForCourseAction,
  ShowAllForCourseFailureAction,
  ShowAllForCourseSuccessAction,
  ShowAllForGymAction,
  ShowAllForGymFailureAction,
  ShowAllForGymSuccessAction
} from '../actions/feedback-profile.actions';
import {FeedbackProfileService} from '../services/feedback-profile.service';
import {selectUserDetail, selectUserToken} from '../selectors/user.selector';
import {IAppState} from '../state/app.states';
import {EUserActions, LoginSuccessAction} from '../actions/user.actions';

@Injectable()
export class FeedbacksProfileEffects {

  constructor(private store: Store<IAppState>, private actions: Actions, private feedbackProfileService: FeedbackProfileService) { }

  loginSuccessFetchGym = createEffect(() => this.actions.pipe(
    ofType<LoginSuccessAction>(EUserActions.LOGIN_SUCCESS),
    switchMap(() => of(new ShowAllForGymAction()))
    )
  );
  loginSuccessFetchCourse = createEffect(() => this.actions.pipe(
    ofType<LoginSuccessAction>(EUserActions.LOGIN_SUCCESS),
    switchMap(() => of(new ShowAllForCourseAction()))
    )
  );

  findAllForGym = createEffect(() => this.actions.pipe(
    ofType<ShowAllForGymAction>(EFeedbackProfileActions.SHOW_ALL_FOR_GYM),
    switchMap(() => this.store.select(selectUserDetail)),
    withLatestFrom(this.store.select(selectUserToken)),
    switchMap(([user, token]) => this.feedbackProfileService.getAllFeedbacksToGym(user.id, token)),
    switchMap((feedbacks) => of(new ShowAllForGymSuccessAction(feedbacks))),
    catchError(() => of(new ShowAllForGymFailureAction()))
    )
  );

  findAllForCourse = createEffect(() => this.actions.pipe(
    ofType<ShowAllForCourseAction>(EFeedbackProfileActions.SHOW_ALL_FOR_COURSE),
    switchMap(() => this.store.select(selectUserDetail)),
    withLatestFrom(this.store.select(selectUserToken)),
    switchMap(([user, token]) => this.feedbackProfileService.getAllFeedbacksToCourse(user.id, token)),
    switchMap((feedbacks) => of(new ShowAllForCourseSuccessAction(feedbacks))),
    catchError(() => of(new ShowAllForCourseFailureAction()))
    )
  );
}
