import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../../../../services/auth/admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../../../domain/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  loginError: any;
  user: User;

  constructor(public router: Router, private fb: FormBuilder, private adminService: AdminService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submit(): void {
    this.user = this.loginForm.value;

    this.adminService.authenticateAdmin(this.user).subscribe(res => {
      localStorage.setItem('admin-token', JSON.stringify(res.headers.get('Authorization')));
      this.router.navigate(['admin']);
    }, error => {
      this.loginError = error;
      // return this.router.navigate(['']);
    });
  }

}
