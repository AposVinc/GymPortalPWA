import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import {catchError, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {
  CreateFavoriteGymAction,
  CreateFavoriteGymFailureAction,
  CreateFavoriteGymSuccessAction,
  DeleteFavoriteGymAction,
  DeleteFavoriteGymFailureAction,
  DeleteFavoriteGymSuccessAction,
  EFavoriteGymActions,
  ShowAllFavoritesGymAction,
  ShowAllFavoritesGymFailureAction,
  ShowAllFavoritesGymSuccessAction
} from '../actions/favorite-gym.actions';
import {
  CreateFavoriteCourseAction,
  CreateFavoriteCourseFailureAction,
  CreateFavoriteCourseSuccessAction,
  DeleteFavoriteCourseAction,
  DeleteFavoriteCourseFailureAction,
  DeleteFavoriteCourseSuccessAction,
  EFavoriteCourseActions,
  ShowAllFavoritesCourseAction,
  ShowAllFavoritesCourseFailureAction,
  ShowAllFavoritesCourseSuccessAction
} from '../actions/favorite-course.actions';
import {selectUserDetail, selectUserToken} from '../selectors/user.selector';
import {IAppState} from '../state/app.states';
import {EUserActions, LoginSuccessAction} from '../actions/user.actions';
import {FavoriteService} from '../services/favorite.service';

@Injectable()
export class FavoriteEffects {

  constructor(private store: Store<IAppState>, private actions: Actions, private favoriteService: FavoriteService) { }

  loginSuccessFetchGym = createEffect(() => this.actions.pipe(
    ofType<LoginSuccessAction>(EUserActions.LOGIN_SUCCESS),
    switchMap(() => of(new ShowAllFavoritesGymAction()))
    )
  );
  loginSuccessFetchCourse = createEffect(() => this.actions.pipe(
    ofType<LoginSuccessAction>(EUserActions.LOGIN_SUCCESS),
    switchMap(() => of(new ShowAllFavoritesCourseAction()))
    )
  );


  // Gym
  findAllForGym = createEffect(() => this.actions.pipe(
    ofType<ShowAllFavoritesGymAction>(EFavoriteGymActions.SHOW_ALL),
    switchMap(() => this.store.select(selectUserDetail)),
    withLatestFrom(this.store.select(selectUserToken)),
    switchMap(([user, token]) => this.favoriteService.getAllFavoriteGyms(user.id, token)),
    switchMap((favorites) => of(new ShowAllFavoritesGymSuccessAction(favorites))),
    catchError(() => of(new ShowAllFavoritesGymFailureAction()))
    ),
  );

  createFavoriteGym = createEffect(() => this.actions.pipe(
    ofType<CreateFavoriteGymAction>(EFavoriteGymActions.CREATE),
    switchMap((action) => {
      return this.store.select(selectUserDetail).pipe(
        mergeMap( (user) => {
          return this.store.select(selectUserToken).pipe(
            mergeMap( (token) => {
              return this.favoriteService.addGymToFavorite(user.id, action.gym.id, token).pipe(
                mergeMap(() => [action.gym])
              );
            })
          );
        })
      );
    }),
    switchMap((payload) => of(new CreateFavoriteGymSuccessAction(payload))),
    catchError(() => of(new CreateFavoriteGymFailureAction()))
    )
  );

  deleteFavoriteGym = createEffect(() => this.actions.pipe(
    ofType<DeleteFavoriteGymAction>(EFavoriteGymActions.DELETE),
    switchMap((action) => {
      return this.store.select(selectUserDetail).pipe(
        mergeMap( (user) => {
          return this.store.select(selectUserToken).pipe(
            mergeMap( (token) => {
              return this.favoriteService.removeGymToFavorite(user.id, action.gym.id, token).pipe(
                mergeMap(() => [action.gym])
              );
            })
          );
        })
      );
    }),
    switchMap((payload) => of(new DeleteFavoriteGymSuccessAction(payload))),
    catchError(() => of(new DeleteFavoriteGymFailureAction()))
    )
  );


  // Course
  findAllForCourse = createEffect(() => this.actions.pipe(
    ofType<ShowAllFavoritesCourseAction>(EFavoriteCourseActions.SHOW_ALL),
    switchMap(() => this.store.select(selectUserDetail)),
    withLatestFrom(this.store.select(selectUserToken)),
    switchMap(([user, token]) => this.favoriteService.getAllFavoriteCourses(user.id, token)),
    switchMap((favorites) => of(new ShowAllFavoritesCourseSuccessAction(favorites))),
    catchError(() => of(new ShowAllFavoritesCourseFailureAction()))
    )
  );

  createFavoriteCourse = createEffect(() => this.actions.pipe(
    ofType<CreateFavoriteCourseAction>(EFavoriteCourseActions.CREATE),
    switchMap((action) => {
      return this.store.select(selectUserDetail).pipe(
        mergeMap( (user) => {
          return this.store.select(selectUserToken).pipe(
            mergeMap( (token) => {
              return this.favoriteService.addCourseToFavorite(user.id, action.course.id, token).pipe(
                mergeMap(() => [action.course])
              );
            })
          );
        })
      );
    }),
    switchMap((payload) => of(new CreateFavoriteCourseSuccessAction(payload))),
    catchError(() => of(new CreateFavoriteCourseFailureAction()))
    )
  );

  deleteFavoriteCourse = createEffect(() => this.actions.pipe(
    ofType<DeleteFavoriteCourseAction>(EFavoriteCourseActions.DELETE),
    switchMap((action) => {
      return this.store.select(selectUserDetail).pipe(
        mergeMap( (user) => {
          return this.store.select(selectUserToken).pipe(
            mergeMap( (token) => {
              return this.favoriteService.removeCourseToFavorite(user.id, action.course.id, token).pipe(
                mergeMap(() => [action.course])
              );
            })
          );
        })
      );
    }),
    switchMap((payload) => of(new DeleteFavoriteCourseSuccessAction(payload))),
    catchError(() => of(new DeleteFavoriteCourseFailureAction()))
    )
  );

}
