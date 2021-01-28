import { Component, OnInit } from '@angular/core';
import {Region} from '../../../../../domain/Region';
import {RegionService} from '../../../../../services/utility/region.service';
import {GymService} from '../../../../../services/gym.service';
import {Gym} from '../../../../../domain/Gym';
import {NgForm} from '@angular/forms';
import {CourseService} from '../../../../../services/course.service';
import {AdminService} from '../../../../../services/admin.service';

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

  successfulOp: boolean;
  errorMessage: string;

  constructor(private regionService: RegionService, private gymService: GymService, private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }

  changeGyms(): void {
    this.gymService.getGymsByRegion(this.selectedRegion).subscribe(g => this.gyms = g);
  }

  deleteGym(deleteGymForm: NgForm): void {
    this.adminService.deleteGym(this.selectedGymId).subscribe(e => {
      deleteGymForm.resetForm();
      this.successfulOp = true;
    }, error => {
      this.successfulOp = false;
      this.errorMessage = error;
      // return this.router.navigate(['']);
    });  }
}
