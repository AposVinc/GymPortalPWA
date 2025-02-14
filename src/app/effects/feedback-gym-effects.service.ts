import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {catchError, concatMap, mergeMap, switchMap, tap} from 'rxjs/operators';
import {FeedbackGymService} from '../services/feedback-gym.service';
import {
  CreateAction,
  CreateFailureAction,
  CreateSuccessAction,
  DeleteAction,
  DeleteFailureAction,
  DeleteSuccessAction,
  EFeedbackGymActions,
  ShowAllAction,
  ShowAllFailureAction,
  ShowAllSuccessAction,
  UpdateAction,
  UpdateFailureAction,
  UpdateSuccessAction
} from '../actions/feedback-gym.actions';
import {selectUserToken} from '../selectors/user.selector';
import {IAppState} from '../state/app.states';
import {Router} from '@angular/router';

@Injectable()
export class FeedbacksGymEffects {

  constructor(private store: Store<IAppState>, private actions: Actions, private feedbackGymService: FeedbackGymService, private router: Router) { }

  findAll = createEffect(() => this.actions.pipe(
    ofType<ShowAllAction>(EFeedbackGymActions.SHOW_ALL),
    switchMap((action) => this.feedbackGymService.getAll(action.idGym).pipe(
      concatMap( (feedbacks) => [{feedbacks, idGym: action.idGym}]),
      switchMap((payload) => of(new ShowAllSuccessAction(payload))),
      catchError(() => of(new ShowAllFailureAction()))
    )))
  );

  create = createEffect(() => this.actions.pipe(
    ofType<CreateAction>(EFeedbackGymActions.CREATE),
    switchMap((action) => this.store.select(selectUserToken).pipe(
      concatMap((token) => this.feedbackGymService.save(action.feedback, token).pipe(
        concatMap((result) => {
          const id: number = +result.headers.get('Location').substring(result.headers.get('Location').lastIndexOf('/') + 1);
          return [{...action.feedback, id}];
        })
      )),
      concatMap((payload) => of(new CreateSuccessAction(payload))),
      tap(() => this.router.navigate(['./'])),
      catchError(() => of(new CreateFailureAction()))
    )))
  );

  update = createEffect(() => this.actions.pipe(
    ofType<UpdateAction>(EFeedbackGymActions.UPDATE),
    switchMap((action) => this.store.select(selectUserToken).pipe(
      concatMap((token) => this.feedbackGymService.update(action.feedback, token)),
      concatMap(() => [{...action.feedback}]),
      concatMap((payload) => of(new UpdateSuccessAction(payload))),
      tap(() => this.router.navigate(['./'])),
      catchError(() => of(new UpdateFailureAction()))
    )))
  );

  delete = createEffect(() => this.actions.pipe(
    ofType<DeleteAction>(EFeedbackGymActions.DELETE),
    switchMap((action) => this.store.select(selectUserToken).pipe(
      concatMap( (token) => this.feedbackGymService.delete(action.feedback, token)),
      concatMap( () => [action.feedback]),
      switchMap((payload) => of(new DeleteSuccessAction(payload))),
      tap(() => this.router.navigate(['./'])),
      catchError(() => of(new DeleteFailureAction()))
    )))
  );

}
