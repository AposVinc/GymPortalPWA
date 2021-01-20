import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GymComponent} from './components/pages/gym/gym.component';
import {CourseComponent} from './components/pages/course/course.component';
import {FeedbackComponent} from './components/pages/feedback/feedback.component';
import {GymCardComponent} from './components/components/gym-card/gym-card.component';
import {CourseCardComponent} from './components/components/course-card/course-card.component';
import {FeedbackGymCardComponent} from './components/components/feedback-gym-card/feedback-gym-card.component';
import {FeedbackCourseCardComponent} from './components/components/feedback-course-card/feedback-course-card.component';
import { AddFeedbackGymCardComponent } from './components/components/add-feedback-gym-card/add-feedback-gym-card.component';
import { AddFeedbackCourseCardComponent } from './components/components/add-feedback-course-card/add-feedback-course-card.component';
import {TitleComponent} from './components/components/title/title.component';

import {GymsRoutingModule} from './gyms-routing.module';
import {GymsComponent} from './gyms.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddFeedbackGymComponent } from './components/pages/add-feedback-gym/add-feedback-gym.component';
import { AddFeedbackCourseComponent } from './components/pages/add-feedback-course/add-feedback-course.component';


@NgModule({
  declarations: [
    GymsComponent,
    TitleComponent,
    GymComponent,
    CourseComponent,
    FeedbackComponent,
    GymCardComponent,
    CourseCardComponent,
    FeedbackGymCardComponent,
    FeedbackCourseCardComponent,
    AddFeedbackGymCardComponent,
    AddFeedbackCourseCardComponent,
    AddFeedbackGymComponent,
    AddFeedbackCourseComponent,
  ],
  imports: [
    CommonModule,
    GymsRoutingModule,
    ReactiveFormsModule
  ]
})
export class GymsModule { }
