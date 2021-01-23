import { Component, OnInit } from '@angular/core';
import {Region} from '../../../../../domain/Region';
import {RegionService} from '../../../../../services/utility/region.service';
import {Gym} from '../../../../../domain/Gym';
import {GymService} from '../../../../../services/gym.service';
import {NgForm} from '@angular/forms';
import {ICourse} from '../../../../../domain/Course';
import {AdminService} from '../../../../../services/admin.service';

@Component({
  selector: 'app-add-course-card',
  templateUrl: './add-course-card.component.html',
  styleUrls: ['./add-course-card.component.css']
})
export class AddCourseCardComponent implements OnInit {

  newCourse = new ICourse();
  gyms: Array<Gym>;
  regions: Array<Region>;
  selectedRegion: string;

  successfulOp: boolean;
  errorMessage: string;

  constructor(private regionService: RegionService, private gymService: GymService, private adminService: AdminService) {
    this.gyms = [];
    this.selectedRegion = '';
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }

  changeGyms(): void {
    this.gymService.getGymsByRegion(this.selectedRegion).subscribe(g => this.gyms = g);
  }

  addCourse(addCourseForm: NgForm): void {
    this.adminService.saveCourse(this.newCourse).subscribe(e => {
      addCourseForm.resetForm();
      this.successfulOp = e.ok;
    }, error => {
      this.errorMessage = error;
      // return this.router.navigate(['']);
    });
  }

}
