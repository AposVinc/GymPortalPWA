import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {LoginAction} from '../../../actions/user.actions';
import {User} from '../../../domain/User';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  user: User;
  loginError: any;


  constructor(private store: Store<IAppState>, private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.user = this.loginForm.value;

    // this.authService.authenticate(this.login).subscribe(res => {
    //   localStorage.setItem('login', JSON.stringify(res.headers.get('Authorization')));
    //   localStorage.setItem('location', JSON.stringify(res.headers.get('Location')));
    //   this.router.navigate(['']);
    // }, error => {
    //   this.loginError = error;
    // });


    this.store.dispatch( new LoginAction(this.user));
  }

}
