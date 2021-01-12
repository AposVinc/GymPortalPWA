import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {Observable} from 'rxjs';
import {selectCommonLogged} from '../../../selectors/common.selector';
import {LoggedOutAction} from '../../../actions/common.actions';
import {GlobalService} from '../../../services/utility/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged: Observable<boolean>;
  flagMenu: boolean;

  prevScrollPos: any;

  constructor(private store: Store<IAppState>, public globalService: GlobalService, public router: Router, private renderer: Renderer2) {
    this.flagMenu = false;
    this.logged = this.store.select(selectCommonLogged);
  }

  ngOnInit(): void {
    this.prevScrollPos = window.pageYOffset;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.globalService.isMobile();
    if (this.flagMenu && this.globalService.flagMobile){
      this.renderer.addClass(document.body, 'mobile-nav-active');
    } else {
      this.renderer.removeClass(document.body, 'mobile-nav-active');
    }
    if (this.globalService.flagMobile) {
      document.getElementById('header').style.top = '0';
      document.getElementById('topbar').style.top = '-50px';
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollPos > currentScrollPos) {
      document.getElementById('header').style.top = '0';
      document.getElementById('mobile-nav-toggle').style.top = '0';
      document.getElementById('topbar').style.top = '-50px';
      if (window.pageYOffset === 0 && !this.globalService.flagMobile) {
        document.getElementById('header').style.top = '30px';
        document.getElementById('topbar').style.top = '0';
      }
    } else {
      document.getElementById('header').style.top = '-84px';
      document.getElementById('mobile-nav-toggle').style.top = '-84px';
      document.getElementById('topbar').style.top = '-50px';
      if (window.pageYOffset < 45) {
        document.getElementById('header').style.top = '0';
      }
    }
    this.prevScrollPos = currentScrollPos;
  }

  handleMenu(): void {
    this.flagMenu = !this.flagMenu;
    if (this.flagMenu && this.globalService.flagMobile){
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
