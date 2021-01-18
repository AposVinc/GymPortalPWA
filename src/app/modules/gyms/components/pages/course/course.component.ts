import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../../state/app.states';
import {selectGymById} from '../../../../../selectors/gym.selector';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  idGym: number;
  gymName: string;

  constructor(private ar: ActivatedRoute, private store: Store<IAppState>) {
    this.idGym = +this.ar.snapshot.params.idGym;
    this.gymName = '';
  }

  ngOnInit(): void {
    this.store.select(selectGymById(this.idGym)).subscribe(
      (g) => {
        if (g){
          this.gymName = g.name;
        }
    });
  }

}
