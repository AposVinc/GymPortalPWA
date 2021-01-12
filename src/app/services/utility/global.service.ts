import {HostListener, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  screenWidth: any;
  screenHeight: any;
  public flagMobile: boolean;

  constructor() {
    this.flagMobile = false;
  }

  public isMobile(): void{
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.flagMobile = this.screenWidth <= 768;
    console.log(this.flagMobile, this.screenWidth, this.screenHeight)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.isMobile();
  }
}
