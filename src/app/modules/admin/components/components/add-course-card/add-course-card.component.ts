import { Component, OnInit } from '@angular/core';
import {Region} from '../../../../../domain/Region';
import {RegionService} from '../../../../../services/utility/region.service';
import {Gym} from '../../../../../domain/Gym';
import {GymService} from '../../../../../services/gym.service';

class NewCourse {
  name: string;
  description: string;
  gym: number;
}

@Component({
  selector: 'app-add-course-card',
  templateUrl: './add-course-card.component.html',
  styleUrls: ['./add-course-card.component.css']
})
export class AddCourseCardComponent implements OnInit {

  newCourse = new NewCourse();
  gyms: Array<Gym>;
  regions: Array<Region>;
  selectedRegion: string;

  constructor(private regionService: RegionService, private gymService: GymService) {
    this.gyms = [];
    this.selectedRegion = '';
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }

  changeGyms(): void {
    this.gymService.getGymsByRegion(this.selectedRegion).subscribe(g => this.gyms = g);
  }

  addCourse(): void {
    console.log('ciao');
  }

}
