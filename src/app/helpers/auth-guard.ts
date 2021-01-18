import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../state/app.states';
import {selectCommonLogged} from '../selectors/common.selector';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<IAppState>, public router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(selectCommonLogged),
      map((logged: boolean) => {
        // console.log('logged: ' + logged);
        if (logged) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }),
      take(1)
    );
  }
}

