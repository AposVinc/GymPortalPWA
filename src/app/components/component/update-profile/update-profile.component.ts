import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../domain/User';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {selectUserDetail} from '../../../selectors/user.selector';
import {Observable} from 'rxjs';
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

  constructor(private store: Store<IAppState>, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });
    this.user = this.store.select(selectUserDetail);
    this.user.subscribe(u => {
      if (u !== null){
        this.idUser = u.id;
        this.updateForm.patchValue(u);
      }
    });
  }

  update() {
    const userUpdated: User = {...this.updateForm.value, id: this.idUser};
    this.store.dispatch( new UpdateAction(userUpdated));
  }

}
