import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {catchError, mergeMap, switchMap, tap} from 'rxjs/operators';
import {
  EFeedbackProfileActions,
  ShowAllForGymAction, ShowAllForGymFailureAction, ShowAllForGymSuccessAction,
  ShowAllForCourseAction, ShowAllForCourseFailureAction, ShowAllForCourseSuccessAction
} from '../actions/feedback-profile.actions';
import {FeedbackProfileService} from '../services/feedback-profile.service';
import {selectUserDetail, selectUserToken} from '../selectors/user.selector';
import {IAppState} from '../state/app.states';
import {EUserActions, LoginSuccessAction} from '../actions/user.actions';

@Injectable()
export class FeedbacksProfileEffects {

  constructor(private store: Store<IAppState>, private actions: Actions, private feedbackProfileService: FeedbackProfileService) { }

  @Effect()
  loginSuccessFetchGym: Observable<Action> =
    this.actions.pipe(
      ofType<LoginSuccessAction>(EUserActions.LOGIN_SUCCESS),
      switchMap(() => of(new ShowAllForGymAction()))
    );
  @Effect()
  loginSuccessFetchCourse: Observable<Action> =
    this.actions.pipe(
      ofType<LoginSuccessAction>(EUserActions.LOGIN_SUCCESS),
      switchMap(() => of(new ShowAllForCourseAction()))
    );

  @Effect()
  findAllForGym: Observable<Action> =
    this.actions.pipe(
      ofType<ShowAllForGymAction>(EFeedbackProfileActions.SHOW_ALL_FOR_GYM),
      switchMap(() => {
        return this.store.select(selectUserDetail).pipe(
          mergeMap( (user) => {
            return this.store.select(selectUserToken).pipe(
              mergeMap( (token) => {
                return this.feedbackProfileService.getAllFeedbacksToGym(user.id, token);
              })
            );
          })
        );
      }),
      switchMap((feedbacks) => of(new ShowAllForGymSuccessAction(feedbacks))),
      catchError(() => of(new ShowAllForGymFailureAction()))
    );

  @Effect()
  findAllForCourse: Observable<Action> =
    this.actions.pipe(
      ofType<ShowAllForCourseAction>(EFeedbackProfileActions.SHOW_ALL_FOR_COURSE),
      switchMap(() => {
        return this.store.select(selectUserDetail).pipe(
          mergeMap( (user) => {
            return this.store.select(selectUserToken).pipe(
              mergeMap( (token) => {
                return this.feedbackProfileService.getAllFeedbacksToCourse(user.id, token);
              })
            );
          })
        );
      }),
      switchMap((feedbacks) => of(new ShowAllForCourseSuccessAction(feedbacks))),
      catchError(() => of(new ShowAllForCourseFailureAction()))
    );
}
