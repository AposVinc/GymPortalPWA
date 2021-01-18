import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../state/app.states';
import {selectFavoritesGym} from '../../../selectors/favorite.selector';
import {Gym} from '../../../domain/Gym';
import {Observable} from 'rxjs';
import {DeleteFavoriteGymAction, ShowAllFavoritesGymAction} from '../../../actions/favorite-gym.actions';
import {UtilityService} from '../../../services/utility/utility.service';

@Component({
  selector: 'app-favorite-gym-card',
  templateUrl: './favorite-gym-card.component.html',
  styleUrls: ['./favorite-gym-card.component.css']
})
export class FavoriteGymCardComponent implements OnInit {

  favorites: Observable<Gym[]>;

  constructor(private store: Store<IAppState>, public utilityService: UtilityService) {
    this.store.dispatch( new ShowAllFavoritesGymAction());
  }

  ngOnInit(): void {
    // this.favoriteService.findAllFavGym('token').subscribe(res => {
    //   this.favoriteGyms = res;
    // });
    this.store.dispatch( new ShowAllFavoritesGymAction());
    this.favorites = this.store.select(selectFavoritesGym);
  }

  delete(gym: Gym) {
    // this.favoriteService.deleteFavGym(id,'token').subscribe();
    // window.location.reload();
    this.store.dispatch( new DeleteFavoriteGymAction(gym));
  }

}
