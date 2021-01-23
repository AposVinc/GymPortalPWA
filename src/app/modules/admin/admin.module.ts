import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TitleComponent } from './components/components/title/title.component';
import { AddGymCardComponent } from './components/components/add-gym-card/add-gym-card.component';
import { AddCourseCardComponent } from './components/components/add-course-card/add-course-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/pages/login/login.component';
import { LoginFormComponent } from './components/components/login-form/login-form.component';
import { DeleteGymFormComponent } from './components/components/delete-gym-form/delete-gym-form.component';
import { DeleteCourseFormComponent } from './components/components/delete-course-form/delete-course-form.component';


@NgModule({
  declarations: [AdminComponent, TitleComponent, AddGymCardComponent, AddCourseCardComponent, LoginComponent, LoginFormComponent, DeleteGymFormComponent, DeleteCourseFormComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
