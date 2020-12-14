import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {catchError, mergeMap, switchMap, tap} from 'rxjs/operators';
import {FeedbackCourseService} from '../services/feedback-course.service';
import {EFeedbackCourseActions,
  ShowAllAction, ShowAllFailureAction, ShowAllSuccessAction,
  CreateAction, CreateFailureAction, CreateSuccessAction,
  UpdateAction, UpdateFailureAction, UpdateSuccessAction,
  DeleteAction, DeleteFailureAction, DeleteSuccessAction
} from '../actions/feedback-course.actions';
import {IAppState} from '../state/app.states';
import {selectUserToken} from '../selectors/user.selector';
import {Router} from '@angular/router';

@Injectable()
export class FeedbacksCourseEffects {

  constructor(private store: Store<IAppState>, private actions: Actions, private feedbackCourseService: FeedbackCourseService, private router: Router) { }

  @Effect()
  findAll: Observable<Action> =
    this.actions.pipe(
      ofType<ShowAllAction>(EFeedbackCourseActions.SHOW_ALL),
      switchMap((action) => {
        return this.feedbackCourseService.getAll(action.idGym, action.idCourse).pipe(
          mergeMap( (feedbacks) => [{feedbacks, idGym: action.idGym, idCourse: action.idCourse}]
          ),
        );
      }),
      switchMap((payload) => of(new ShowAllSuccessAction(payload))),
      catchError(() => of(new ShowAllFailureAction()))
    );

  @Effect()
  create: Observable<Action> =
    this.actions.pipe(
      ofType<CreateAction>(EFeedbackCourseActions.CREATE),
      switchMap((action) => {
        return this.store.select(selectUserToken).pipe(
          mergeMap( (token) => {
            return this.feedbackCourseService.save(action.idGym, action.feedback, token).pipe(
              mergeMap( (result) => {
                const id: number = +result.headers.get('Location').substring(result.headers.get('Location').lastIndexOf('/') + 1);
                return [{idGym: action.idGym, feedback: {...action.feedback, id}}];
              })
            );
          })
        );
      }),
      switchMap((payload) => of(new CreateSuccessAction(payload))),
      tap(() => {
        return this.router.navigate(['./']);
      }),
      catchError(() => of(new CreateFailureAction()))
    );

  @Effect()
  update: Observable<Action> =
    this.actions.pipe(
      ofType<UpdateAction>(EFeedbackCourseActions.UPDATE),
      switchMap((action) => {
        return this.store.select(selectUserToken).pipe(
          mergeMap( (token) => {
            return this.feedbackCourseService.update(action.idGym, action.feedback, token).pipe(
              mergeMap( () => [{idGym: action.idGym, feedback: action.feedback}] )
            );
          })
        );
      }),
      switchMap((payload) => of(new UpdateSuccessAction(payload))),
      tap(() => {
        return this.router.navigate(['./']);
      }),
      catchError(() => of(new UpdateFailureAction()))
    );

  @Effect()
  delete: Observable<Action> =
    this.actions.pipe(
      ofType<DeleteAction>(EFeedbackCourseActions.DELETE),
      switchMap((action) => {
        return this.store.select(selectUserToken).pipe(
          mergeMap( (token) => {
            return this.feedbackCourseService.delete(action.idGym, action.feedback, token).pipe(
              mergeMap( () => [{idGym: action.idGym, feedback: action.feedback}])
            );
          })
        );
      }),
      switchMap((payload) => of(new DeleteSuccessAction(payload))),
      tap(() => {
        return this.router.navigate(['./']);
      }),
      catchError(() => of(new DeleteFailureAction()))
    );
}
