import {HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  screenWidth: any;
  screenHeight: any;
  private flagMobile: boolean;

  constructor() {
    this.flagMobile = false;
  }

  public isMobile(): void{
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.flagMobile = this.screenWidth <= 768;
  }

  public getFlagMobile(): boolean{
    return this.flagMobile;
  }

}
