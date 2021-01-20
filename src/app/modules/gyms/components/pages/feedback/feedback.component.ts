import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {selectCourseByGymIdAndCourseId} from '../../../../../selectors/gym.selector';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../../state/app.states';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  idGym: number;
  idCourse: number;
  courseName: string;

  constructor(private ar: ActivatedRoute, private store: Store<IAppState>) {
    this.idGym = +this.ar.snapshot.params.idGym;
    this.idCourse = +this.ar.snapshot.params.idCourse;
    this.courseName = '';
  }

  ngOnInit(): void {
    this.store.select(selectCourseByGymIdAndCourseId(this.idGym, this.idCourse)).subscribe(
      (c) => {
        if (c){
          this.courseName = c.name;
        }
      });
  }

}
