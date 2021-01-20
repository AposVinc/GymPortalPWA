import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent implements OnInit {
  region: string;

  constructor(private ar: ActivatedRoute) {
    this.region = this.ar.snapshot.params.region;
  }
  ngOnInit(): void {
  }

}
