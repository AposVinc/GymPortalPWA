import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {Observable} from 'rxjs';
import {selectCommonLogged} from '../../../selectors/common.selector';
import {LoggedOutAction} from '../../../actions/common.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged: Observable<boolean>;

  constructor(private store: Store<IAppState>, public router: Router) {
    this.logged = this.store.select(selectCommonLogged);
  }

  ngOnInit(): void {
  }

  logout(): void {
    // this.authService.logout();
    // this.router.navigate(['login']);

    this.store.dispatch(new LoggedOutAction());
  }

}
