import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(public router: Router) {
  }

  canActivate(): boolean {
    const login: string = JSON.parse(localStorage.getItem('admin-token'));
    if (!login) {
      this.router.navigate(['admin/login']);
      return false;
    }
    return true;
  }
}
