import {Component, OnInit} from '@angular/core';
import {Course} from '../../../domain/Course';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {DeleteFavoriteCourseAction} from '../../../actions/favorite-course.actions';
import {selectFavoritesCourse} from '../../../selectors/favorite.selector';
import {UtilityService} from '../../../services/utility/utility.service';

@Component({
  selector: 'app-favorite-course-card',
  templateUrl: './favorite-course-card.component.html',
  styleUrls: ['./favorite-course-card.component.css']
})
export class FavoriteCourseCardComponent implements OnInit {

  favorites: Observable<Course[]>;

  constructor(private store: Store<IAppState>, public utilityService: UtilityService) {
    // this.store.dispatch( new ShowAllFavoritesCourseAction());
  }

  ngOnInit(): void {
    // this.favProfile.findAllFavCourse('token').subscribe(res => {
    //   this.favoriteCourses = res;
    // });
    this.favorites = this.store.select(selectFavoritesCourse);
  }

  delete(course: Course) {
    // this.favProfile.deleteFavCourse(id, 'token').subscribe();
    // window.location.reload();
    this.store.dispatch( new DeleteFavoriteCourseAction(course) );
  }

}
