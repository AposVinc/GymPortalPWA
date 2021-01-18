import {Component, Input, OnInit} from '@angular/core';
import {Gym} from '../../../../../domain/Gym';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../../state/app.states';
import {selectGymList} from '../../../../../selectors/gym.selector';
import {ShowAllAction} from '../../../../../actions/gym.actions';
import {ActivatedRoute} from '@angular/router';
import {CreateFavoriteGymAction, DeleteFavoriteGymAction} from '../../../../../actions/favorite-gym.actions';
import {selectFavoritesGym} from '../../../../../selectors/favorite.selector';
import {Utility} from '../../../../../helpers/utility';

@Component({
  selector: 'app-gym-card',
  templateUrl: './gym-card.component.html',
  styleUrls: ['./gym-card.component.css']
})
export class GymCardComponent implements OnInit {

  region: string;
  gyms: Observable<Gym[]>;
  favorites: Observable<Gym[]>;

  constructor(private ar: ActivatedRoute, public utilityService: Utility, private store: Store<IAppState>) {
    this.region = this.ar.snapshot.params.region;
    this.gyms = this.store.select(selectGymList);
    this.favorites = this.store.select(selectFavoritesGym);
  }

  ngOnInit(): void {
    this.getGymsByRegion();
  }

  getGymsByRegion(): void{
    this.store.dispatch( new ShowAllAction(this.region, ''));
  }


  isFav(favs: Gym[], gym: Gym): boolean{
    if (favs.find(e => e.id === gym.id)) {
      return true;
    } else {
      return false;
    }
  }

  addFav(gym: Gym) {
    this.store.dispatch( new CreateFavoriteGymAction(gym));
  }

  delFav(gym: Gym) {
    this.store.dispatch( new DeleteFavoriteGymAction(gym));
  }

}
