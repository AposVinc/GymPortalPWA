import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
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
  flagMobile: boolean;
  flagMenu: boolean;
  screenWidth: any;
  screenHeight: any;

  constructor(private store: Store<IAppState>, public router: Router, private renderer: Renderer2) {
    this.flagMobile = false;
    this.flagMenu = false;
    this.logged = this.store.select(selectCommonLogged);
  }

  ngOnInit(): void {
    this.checkMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void{
    this.checkMobile();
  }

  checkMobile(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.flagMobile = this.screenWidth <= 768;
    if (this.flagMenu && this.flagMobile){
      this.renderer.addClass(document.body, 'mobile-nav-active');
    } else {
      this.renderer.removeClass(document.body, 'mobile-nav-active');
    }
  }

  handleMenu(): void {
    this.flagMenu = !this.flagMenu;
    if (this.flagMenu && this.flagMobile){
      this.renderer.addClass(document.body, 'mobile-nav-active');
    } else {
      this.renderer.removeClass(document.body, 'mobile-nav-active');
    }
  }

  logout(): void {
    // this.authService.logout();
    // this.router.navigate(['login']);

    this.store.dispatch(new LoggedOutAction());
  }

}
