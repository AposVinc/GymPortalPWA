import { Component, OnInit } from '@angular/core';
import {RegionService} from '../../../../../services/utility/region.service';
import {Region} from '../../../../../domain/Region';

class NewGym {
  name: string;
  address: string;
  province: string;
  region: string;
}


@Component({
  selector: 'app-add-gym-card',
  templateUrl: './add-gym-card.component.html',
  styleUrls: ['./add-gym-card.component.css']
})
export class AddGymCardComponent implements OnInit {

  newGym = new NewGym();
  regions: Array<Region>;

  constructor(private regionService: RegionService) {
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }

  addGym(): void {
    console.log("ciao");
  }

}
