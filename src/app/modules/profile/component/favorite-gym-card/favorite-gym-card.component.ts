import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Gym} from '../../../../domain/Gym';
import {IAppState} from '../../../../state/app.states';
import {Utility} from '../../../../helpers/utility';
import {selectFavoritesGym} from '../../../../selectors/favorite.selector';
import {DeleteFavoriteGymAction} from '../../../../actions/favorite-gym.actions';

@Component({
  selector: 'app-favorite-gym-card',
  templateUrl: './favorite-gym-card.component.html',
  styleUrls: ['./favorite-gym-card.component.css']
})
export class FavoriteGymCardComponent implements OnInit {

  favorites: Observable<Gym[]>;

  constructor(private store: Store<IAppState>, public utilityService: Utility) {
    // this.store.dispatch( new ShowAllFavoritesGymAction());
  }

  ngOnInit(): void {
    // this.favoriteService.findAllFavGym('token').subscribe(res => {
    //   this.favoriteGyms = res;
    // });
    this.favorites = this.store.select(selectFavoritesGym);
  }

  delete(gym: Gym) {
    // this.favoriteService.deleteFavGym(id,'token').subscribe();
    // window.location.reload();
    this.store.dispatch( new DeleteFavoriteGymAction(gym));
  }

}
