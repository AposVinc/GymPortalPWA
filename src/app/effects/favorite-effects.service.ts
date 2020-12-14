import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {catchError, mergeMap, switchMap} from 'rxjs/operators';
import {
  EFavoriteGymActions,
  ShowAllFavoritesGymAction, ShowAllFavoritesGymFailureAction, ShowAllFavoritesGymSuccessAction,
  CreateFavoriteGymAction, CreateFavoriteGymFailureAction, CreateFavoriteGymSuccessAction,
  DeleteFavoriteGymAction, DeleteFavoriteGymFailureAction, DeleteFavoriteGymSuccessAction
} from '../actions/favorite-gym.actions';
import {
  EFavoriteCourseActions,
  ShowAllFavoritesCourseAction, ShowAllFavoritesCourseFailureAction, ShowAllFavoritesCourseSuccessAction,
  CreateFavoriteCourseAction, CreateFavoriteCourseFailureAction, CreateFavoriteCourseSuccessAction,
  DeleteFavoriteCourseAction, DeleteFavoriteCourseFailureAction, DeleteFavoriteCourseSuccessAction
} from '../actions/favorite-course.actions';
import {selectUserDetail, selectUserToken} from '../selectors/user.selector';
import {IAppState} from '../state/app.states';
import {EUserActions, LoginSuccessAction} from '../actions/user.actions';
import {FavoriteService} from '../services/favorite.service';

@Injectable()
export class FavoriteEffects {

  constructor(private store: Store<IAppState>, private actions: Actions, private favoriteService: FavoriteService) { }

  @Effect()
  loginSuccessFetchGym: Observable<Action> =
    this.actions.pipe(
      ofType<LoginSuccessAction>(EUserActions.LOGIN_SUCCESS),
      switchMap(() => of(new ShowAllFavoritesGymAction()))
    );
  @Effect()
  loginSuccessFetchCourse: Observable<Action> =
    this.actions.pipe(
      ofType<LoginSuccessAction>(EUserActions.LOGIN_SUCCESS),
      switchMap(() => of(new ShowAllFavoritesCourseAction()))
    );


  // Gym
  @Effect()
  findAllForGym: Observable<Action> =
    this.actions.pipe(
      ofType<ShowAllFavoritesGymAction>(EFavoriteGymActions.SHOW_ALL),
      switchMap(() => {
        return this.store.select(selectUserDetail).pipe(
          mergeMap( (user) => {
            return this.store.select(selectUserToken).pipe(
              mergeMap( (token) => {
                return this.favoriteService.getAllFavoriteGyms(user.id, token);
              })
            );
          })
        );
      }),
      switchMap((favorites) => of(new ShowAllFavoritesGymSuccessAction(favorites))),
      catchError(() => of(new ShowAllFavoritesGymFailureAction()))
    );

  @Effect()
  createFavoriteGym: Observable<Action> =
    this.actions.pipe(
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
    );

  @Effect()
  deleteFavoriteGym: Observable<Action> =
    this.actions.pipe(
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
    );


  // Course
  @Effect()
  findAllForCourse: Observable<Action> =
    this.actions.pipe(
      ofType<ShowAllFavoritesCourseAction>(EFavoriteCourseActions.SHOW_ALL),
      switchMap(() => {
        return this.store.select(selectUserDetail).pipe(
          mergeMap( (user) => {
            return this.store.select(selectUserToken).pipe(
              mergeMap( (token) => {
                return this.favoriteService.getAllFavoriteCourses(user.id, token);
              })
            );
          })
        );
      }),
      switchMap((favorites) => of(new ShowAllFavoritesCourseSuccessAction(favorites))),
      catchError(() => of(new ShowAllFavoritesCourseFailureAction()))
    );

  @Effect()
  createFavoriteCourse: Observable<Action> =
    this.actions.pipe(
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
    );

  @Effect()
  deleteFavoriteCourse: Observable<Action> =
    this.actions.pipe(
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
    );

}
