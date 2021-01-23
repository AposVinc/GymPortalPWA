import { Component, OnInit } from '@angular/core';
import {Region} from '../../../../../domain/Region';
import {Gym} from '../../../../../domain/Gym';
import {RegionService} from '../../../../../services/utility/region.service';
import {GymService} from '../../../../../services/gym.service';
import {CourseService} from '../../../../../services/course.service';
import {Course} from '../../../../../domain/Course';

@Component({
  selector: 'app-delete-course-form',
  templateUrl: './delete-course-form.component.html',
  styleUrls: ['./delete-course-form.component.css']
})
export class DeleteCourseFormComponent implements OnInit {

  regions: Array<Region>;
  gyms: Array<Gym>;
  courses: Array<Course>;
  selectedRegion: string;
  selectedGymId: number;
  selectedCourseId: number;

  constructor(private regionService: RegionService, private gymService: GymService, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }

  changeGyms(): void {
    this.gymService.getGymsByRegion(this.selectedRegion).subscribe(g => this.gyms = g);
  }

  changeCourses(): void {
    this.courseService.getAll(this.selectedGymId).subscribe(c => this.courses = c);
  }

  deleteGym(): void {
    console.log(this.selectedCourseId);
  }

}
