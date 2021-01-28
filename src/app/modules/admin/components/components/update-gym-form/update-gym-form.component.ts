import { Component, OnInit } from '@angular/core';
import {Region} from '../../../../../domain/Region';
import {RegionService} from '../../../../../services/utility/region.service';
import {AdminService} from '../../../../../services/admin.service';
import {NgForm} from '@angular/forms';
import {Gym, IGym} from '../../../../../domain/Gym';
import {GymService} from '../../../../../services/gym.service';

@Component({
  selector: 'app-update-gym-form',
  templateUrl: './update-gym-form.component.html',
  styleUrls: ['./update-gym-form.component.css']
})
export class UpdateGymFormComponent implements OnInit {

  gym: Gym;
  regions: Array<Region>;
  gyms: Array<Gym>;
  selectedRegion: string;
  selectedGymId: number;

  successfulOp: boolean;
  errorMessage: string;

  constructor(private regionService: RegionService, private gymService: GymService, private adminService: AdminService) {
    this.gyms = [];
    this.selectedRegion = '';
    this.gym = new IGym();
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }

  changeGyms(): void {
    this.gymService.getGymsByRegion(this.selectedRegion).subscribe(g => this.gyms = g);
  }

  changeGym(): void {
    this.gymService.getGym(this.selectedGymId).subscribe(g => this.gym = g);
  }

  updateGym(updateGymForm: NgForm): void {
    this.adminService.updateGym(this.gym).subscribe(e => {
      updateGymForm.resetForm();
      this.successfulOp = true;
    }, error => {
      this.successfulOp = false;
      this.errorMessage = error;
      // return this.router.navigate(['']);
    });
  }

}
