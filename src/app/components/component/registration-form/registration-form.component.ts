import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../domain/User';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {RegisterAction} from '../../../actions/user.actions';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private store: Store<IAppState>, private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]

    });
  }

  ngOnInit(): void {
  }

  save() {
    const user: User = this.registrationForm.value;
    // this.userService.save2(user).subscribe(res => {
    //   this.registrationForm.reset();
    //   this.router.navigate(['/login']);
    // });
    this.store.dispatch( new RegisterAction(user) );
  }
}
