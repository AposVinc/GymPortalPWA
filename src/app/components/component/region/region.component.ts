import {Component, OnInit} from '@angular/core';
import {Region} from '../../../domain/Region';
import {RegionService} from '../../../services/region.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginAction} from '../../../actions/user.actions';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions: Array<Region>;

  constructor(private regionService: RegionService, public router: Router) {
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }


  openRegion(regionName): void {
    this.router.navigate(['/regions', regionName, 'gyms']);
  }
}
