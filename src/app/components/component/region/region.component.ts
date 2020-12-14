import {Component, OnInit} from '@angular/core';
import {Region} from '../../../domain/Region';
import {RegionService} from '../../../services/region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions: Array<Region>;

  constructor(private regionService: RegionService) {
  }

  ngOnInit(): void {
    this.regions = this.regionService.findAll();
  }
}
