import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../../state/app.states';
import {selectGymById} from '../../../../../selectors/gym.selector';

@Component({
  selector: 'app-add-feedback-gym',
  templateUrl: './add-feedback-gym.component.html',
  styleUrls: ['./add-feedback-gym.component.css']
})
export class AddFeedbackGymComponent implements OnInit {

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
