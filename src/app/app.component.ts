import {Component} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from './state/app.states';
import {ShowAllFavoritesCourseAction} from './actions/favorite-course.actions';
import {ShowAllFavoritesGymAction} from './actions/favorite-gym.actions';
import {ShowAllForCourseAction, ShowAllForGymAction} from './actions/feedback-profile.actions';
import {selectCommonLogged} from './selectors/common.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GymPortalPWA';
  subscription: Subscription;

  constructor(private router: Router, private store: Store<IAppState>) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.store.select(selectCommonLogged).subscribe(l => {
          if (!router.navigated && l){ // true if refresh and logged
            console.log('refresh');
            this.store.dispatch( new ShowAllFavoritesCourseAction());
            this.store.dispatch( new ShowAllFavoritesGymAction());
            this.store.dispatch( new ShowAllForCourseAction());
            this.store.dispatch( new ShowAllForGymAction());
          }
        });
      }
    });
  }
}
