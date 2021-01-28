import { Component, OnInit } from '@angular/core';
import {Region} from '../../../../../domain/Region';
import {Gym} from '../../../../../domain/Gym';
import {RegionService} from '../../../../../services/utility/region.service';
import {GymService} from '../../../../../services/gym.service';
import {CourseService} from '../../../../../services/course.service';
import {Course} from '../../../../../domain/Course';
import {AdminService} from '../../../../../services/admin.service';
import {NgForm} from '@angular/forms';

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

  successfulOp: boolean;
  errorMessage: string;

  constructor(private regionService: RegionService, private gymService: GymService, private courseService: CourseService, private adminService: AdminService) {
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

  deleteCourse(deleteCourseForm: NgForm): void {
    this.adminService.deleteCourse(this.selectedGymId, this.selectedCourseId).subscribe(e => {
      deleteCourseForm.resetForm();
      this.successfulOp = true;
    }, error => {
      this.successfulOp = false;
      this.errorMessage = error;
      // return this.router.navigate(['']);
    });
  }

}
