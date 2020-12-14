import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {
  region: string;

  constructor(private ar: ActivatedRoute) {
    this.region = this.ar.snapshot.params.region;
  }

  ngOnInit(): void {
  }

}
