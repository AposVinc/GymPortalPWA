import {Component, OnInit} from '@angular/core';
import {Course} from '../../../domain/Course';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {ShowAllAction} from '../../../actions/course.actions';
import {selectCourseListByGymId} from '../../../selectors/gym.selector';
import {Observable} from 'rxjs';
import {CreateFavoriteCourseAction, DeleteFavoriteCourseAction} from '../../../actions/favorite-course.actions';
import {selectFavoritesCourse} from '../../../selectors/favorite.selector';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  idGym: number;
  courses: Observable<Course[]>;
  favorites: Observable<Course[]>;

  constructor(private ar: ActivatedRoute, private store: Store<IAppState>) {
    this.idGym = +this.ar.snapshot.params.idGym;
    this.favorites = this.store.select(selectFavoritesCourse);
  }

  ngOnInit(): void {
    this.courses = this.store.select(selectCourseListByGymId(this.idGym));
    this.store.dispatch( new ShowAllAction(this.idGym) );
  }


  isFav(favs: Course[], course: Course): boolean{
    if (favs.find(e => e.id === course.id)) {
      return true;
    } else {
      return false;
    }
  }

  addFav(course: Course) {
    this.store.dispatch( new CreateFavoriteCourseAction(course) )
  }

  delFav(course: Course) {
    this.store.dispatch( new DeleteFavoriteCourseAction(course) );
  }

}
