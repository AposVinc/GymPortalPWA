import { Component, OnInit } from '@angular/core';
import {RegionService} from '../../../../../services/utility/region.service';
import {Region} from '../../../../../domain/Region';
import {AdminService} from '../../../../../services/admin.service';
import {IGym} from '../../../../../domain/Gym';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-gym-card',
  templateUrl: './add-gym-card.component.html',
  styleUrls: ['./add-gym-card.component.css']
})
export class AddGymCardComponent implements OnInit {

  newGym = new IGym();
  regions: Array<Region>;

  successfulOp: boolean;
  errorMessage: string;

  constructor(private regionService: RegionService, private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }

  addGym(addGymForm: NgForm): void {
    this.adminService.saveGym(this.newGym).subscribe(e => {
      addGymForm.resetForm();
      this.successfulOp = e.ok;
    }, error => {
      this.errorMessage = error;
      // return this.router.navigate(['']);
    });
  }

}
