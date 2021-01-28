import { Component, OnInit } from '@angular/core';
import {Course, ICourse} from '../../../../../domain/Course';
import {Gym} from '../../../../../domain/Gym';
import {Region} from '../../../../../domain/Region';
import {RegionService} from '../../../../../services/utility/region.service';
import {GymService} from '../../../../../services/gym.service';
import {AdminService} from '../../../../../services/admin.service';
import {NgForm} from '@angular/forms';
import {CourseService} from '../../../../../services/course.service';

@Component({
  selector: 'app-update-course-form',
  templateUrl: './update-course-form.component.html',
  styleUrls: ['./update-course-form.component.css']
})
export class UpdateCourseFormComponent implements OnInit {

  course: Course;
  regions: Array<Region>;

  gymsForSelectCourse: Array<Gym>;
  selectedRegionForSelectCourse: string;
  selectedGymIdForSelectCourse: number;
  courses: Array<Course>;
  selectedCourseId: number;

  gyms: Array<Gym>;
  selectedRegion: string;

  successfulOp: boolean;
  errorMessage: string;

  constructor(private regionService: RegionService, private gymService: GymService, private courseService: CourseService, private adminService: AdminService) {
    this.course = new ICourse();
    this.gymsForSelectCourse = [];
    this.gyms = [];
    this.selectedRegionForSelectCourse = '';
    this.selectedRegion = '';
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }

  changeGymsForSelectCourse(): void {
    this.gymService.getGymsByRegion(this.selectedRegionForSelectCourse).subscribe(g => this.gymsForSelectCourse = g);
  }

  changeGymForSelectCourse(): void {
    this.courseService.getAll(this.selectedGymIdForSelectCourse).subscribe(c => this.courses = c);
  }

  changeCourse(): void {
    this.courseService.getCourse(this.selectedGymIdForSelectCourse, this.selectedCourseId).subscribe(c => this.course = c);
  }


  changeGyms(): void {
    this.gymService.getGymsByRegion(this.selectedRegion).subscribe(g => this.gyms = g);
  }

  updateCourse(updateCourseForm: NgForm): void {
    this.adminService.updateCourse(this.course).subscribe(e => {
      updateCourseForm.resetForm();
      this.successfulOp = true;
    }, error => {
      this.successfulOp = false;
      this.errorMessage = error;
      // return this.router.navigate(['']);
    });
  }

}
