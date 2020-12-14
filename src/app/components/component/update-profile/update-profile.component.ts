import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../../domain/User';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {selectUserDetail} from '../../../selectors/user.selector';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UpdateAction} from '../../../actions/user.actions';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  idUser: number;
  user: Observable<User>;
  updateForm: FormGroup;

  constructor(private store: Store<IAppState>, private fb: FormBuilder, private router: Router) {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });
  }

  ngOnInit(): void {
    this.user = this.store.select(selectUserDetail).pipe(tap((user) => this.updateForm.patchValue(user)));
    this.user.subscribe(e => this.idUser = e.id);
  }

  update() {
    const userUpdated: User = {...this.updateForm.value, id: this.idUser};
    this.store.dispatch( new UpdateAction(userUpdated));
  }

}
