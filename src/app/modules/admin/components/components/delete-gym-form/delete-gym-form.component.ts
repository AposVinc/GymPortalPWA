import { Component, OnInit } from '@angular/core';
import {Region} from '../../../../../domain/Region';
import {RegionService} from '../../../../../services/utility/region.service';
import {GymService} from '../../../../../services/gym.service';
import {Gym} from '../../../../../domain/Gym';

@Component({
  selector: 'app-delete-gym-form',
  templateUrl: './delete-gym-form.component.html',
  styleUrls: ['./delete-gym-form.component.css']
})
export class DeleteGymFormComponent implements OnInit {

  regions: Array<Region>;
  gyms: Array<Gym>;
  selectedRegion: string;
  selectedGymId: number;

  constructor(private regionService: RegionService, private gymService: GymService) {
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }

  changeGyms(): void {
    this.gymService.getGymsByRegion(this.selectedRegion).subscribe(g => this.gyms = g);
  }

  deleteGym(): void {
    console.log(this.selectedGymId);
  }
}
