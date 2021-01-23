import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, concatMap, switchMap} from 'rxjs/operators';
import {GymService} from '../services/gym.service';
import {
  EGymActions,
  GetGymAction,
  GetGymFailureAction,
  GetGymSuccessAction,
  ShowAllAction,
  ShowAllFailureAction,
  ShowAllSuccessAction
} from '../actions/gym.actions';

@Injectable()
export class GymEffects {

  constructor(private actions: Actions, private gymService: GymService) { }

  showAll = createEffect(() => this.actions.pipe(
    ofType<ShowAllAction>(EGymActions.SHOW_ALL),
    switchMap((action) => this.gymService.getGymsByRegion(action.region).pipe(
      concatMap((gyms) => {
        gyms.forEach(e => {
          e.courses = [];
          e.feedbacks = [];
        });
        return [gyms];
      }),
      concatMap((payload) => of(new ShowAllSuccessAction(payload))),
      catchError(() => of(new ShowAllFailureAction()))
    )))
  );

  getGym = createEffect(() => this.actions.pipe(
    ofType<GetGymAction>(EGymActions.GET_GYM),
    switchMap((action) => this.gymService.getGym(action.idGym).pipe(
      concatMap((gym) => {
        gym.courses = [];
        gym.feedbacks = [];
        return [gym];
      }),
      concatMap((payload) => of(new GetGymSuccessAction(payload))),
      catchError(() => of(new GetGymFailureAction()))
    )))
  );

}
