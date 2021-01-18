import {Component, OnInit} from '@angular/core';
import {User} from '../../../domain/User';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {Observable} from 'rxjs';
import {selectUserDetail} from '../../../selectors/user.selector';
import {Utility} from '../../../helpers/utility';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css']
})
export class CardProfileComponent implements OnInit {

  user: Observable<User>;

  constructor(private store: Store<IAppState>, public utilityService: Utility) {
    this.user = this.store.select(selectUserDetail);
  }

  ngOnInit(): void {
  }

}
