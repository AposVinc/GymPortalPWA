import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {CourseService} from '../services/course.service';
import {
  ECourseActions,
  GetCourseAction,
  GetCourseFailureAction,
  GetCourseSuccessAction,
  ShowAllAction,
  ShowAllFailureAction,
  ShowAllSuccessAction
} from '../actions/course.actions';

@Injectable()
export class CourseEffects {

  constructor(private actions: Actions, private courseService: CourseService) { }

  showAll = createEffect(() => this.actions.pipe(
    ofType<ShowAllAction>(ECourseActions.SHOW_ALL),
    switchMap((action) => {
      return this.courseService.getAll(action.idGym).pipe(
        mergeMap((courses) => {
            courses.forEach(e => {
              e.feedbacks = [];
            });
            return [{idGym: action.idGym, courses}];
          }
        ));
    }),
    switchMap((payload) => of(new ShowAllSuccessAction(payload))),
    catchError(() => of(new ShowAllFailureAction()))
    )
  );

  getCourse = createEffect(() => this.actions.pipe(
    ofType<GetCourseAction>(ECourseActions.GET_COURSE),
    switchMap((action) => {
      return this.courseService.getCourse(action.idGym, action.idCourse).pipe(
        mergeMap((course) => {
            course.feedbacks = [];
            return [course];
          }
        ));
    }),
    switchMap((payload) => of(new GetCourseSuccessAction(payload))),
    catchError(() => of(new GetCourseFailureAction()))
    )
  );

}
