import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {catchError, concatMap, mergeMap, switchMap, tap} from 'rxjs/operators';
import {FeedbackCourseService} from '../services/feedback-course.service';
import {
  CreateAction,
  CreateFailureAction,
  CreateSuccessAction,
  DeleteAction,
  DeleteFailureAction,
  DeleteSuccessAction,
  EFeedbackCourseActions,
  ShowAllAction,
  ShowAllFailureAction,
  ShowAllSuccessAction,
  UpdateAction,
  UpdateFailureAction,
  UpdateSuccessAction
} from '../actions/feedback-course.actions';
import {IAppState} from '../state/app.states';
import {selectUserToken} from '../selectors/user.selector';
import {Router} from '@angular/router';

@Injectable()
export class FeedbacksCourseEffects {

  constructor(private store: Store<IAppState>, private actions: Actions, private feedbackCourseService: FeedbackCourseService, private router: Router) { }

  findAll = createEffect(() => this.actions.pipe(
    ofType<ShowAllAction>(EFeedbackCourseActions.SHOW_ALL),
    switchMap((action) => this.feedbackCourseService.getAll(action.idGym, action.idCourse).pipe(
      concatMap( (feedbacks) => [{feedbacks, idGym: action.idGym, idCourse: action.idCourse}]),
      concatMap((payload) => of(new ShowAllSuccessAction(payload))),
      catchError(() => of(new ShowAllFailureAction()))
    )))
  );

  create = createEffect(() => this.actions.pipe(
    ofType<CreateAction>(EFeedbackCourseActions.CREATE),
    switchMap((action) => this.store.select(selectUserToken).pipe(
      concatMap( (token) => this.feedbackCourseService.save(action.idGym, action.feedback, token)),
      concatMap( (result) => {
        const id: number = +result.headers.get('Location').substring(result.headers.get('Location').lastIndexOf('/') + 1);
        return [{idGym: action.idGym, feedback: {...action.feedback, id}}];
      }),
      concatMap((payload) => of(new CreateSuccessAction(payload))),
      tap(() => this.router.navigate(['./'])),
      catchError(() => of(new CreateFailureAction()))
    )))
  );

  update = createEffect(() => this.actions.pipe(
    ofType<UpdateAction>(EFeedbackCourseActions.UPDATE),
    switchMap((action) => this.store.select(selectUserToken).pipe(
      concatMap( (token) => this.feedbackCourseService.update(action.idGym, action.feedback, token)),
      concatMap( () => [{idGym: action.idGym, feedback: action.feedback}]),
      concatMap((payload) => of(new UpdateSuccessAction(payload))),
      tap(() => this.router.navigate(['./'])),
      catchError(() => of(new UpdateFailureAction()))
    )))
  );

  delete = createEffect(() => this.actions.pipe(
    ofType<DeleteAction>(EFeedbackCourseActions.DELETE),
    switchMap((action) => this.store.select(selectUserToken).pipe(
      concatMap( (token) => this.feedbackCourseService.delete(action.idGym, action.feedback, token)),
      concatMap( () => [{idGym: action.idGym, feedback: action.feedback}]),
      switchMap((payload) => of(new DeleteSuccessAction(payload))),
      tap(() => this.router.navigate(['./'])),
      catchError(() => of(new DeleteFailureAction()))
    )))
  );
}
