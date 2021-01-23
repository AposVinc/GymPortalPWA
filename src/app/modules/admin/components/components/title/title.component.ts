import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Utility} from '../../../../../helpers/utility';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() hasLogoutButton;

  constructor(public router: Router, public utility: Utility) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('admin-token');
    this.router.navigate(['']);
  }
}
