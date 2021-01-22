import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utility {

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

  // Select Img
  public selectUserImgById(idUser: number): number{
    return (idUser % 5) + 1;
  }

  public selectGymImgById(idGym: number): number{
    return (idGym % 3) + 1;
  }

  public selectCourseImgById(idCourse: number): number{
    return (idCourse % 14) + 1;
  }

  // check if Admin is logged
  isAdminLogged(): boolean{
    const login: string = JSON.parse(localStorage.getItem('admin-token'));
    return !!login;
  }
}
