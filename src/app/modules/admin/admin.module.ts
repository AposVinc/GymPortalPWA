import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TitleComponent } from './components/components/title/title.component';
import { AddGymCardComponent } from './components/components/add-gym-card/add-gym-card.component';
import { AddCourseCardComponent } from './components/components/add-course-card/add-course-card.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, TitleComponent, AddGymCardComponent, AddCourseCardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
