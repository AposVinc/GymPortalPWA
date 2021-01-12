import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  idGym: number;
  idCourse: number;

  constructor(private ar: ActivatedRoute) {
    this.idGym = +this.ar.snapshot.params.idGym;
    this.idCourse = +this.ar.snapshot.params.idCourse;
  }

  ngOnInit(): void {
  }

}
