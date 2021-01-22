import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GymsComponent} from './gyms.component';
import {AuthGuardService} from '../../helpers/guard/auth-guard.service';
import {CourseComponent} from './components/pages/course/course.component';
import {FeedbackComponent} from './components/pages/feedback/feedback.component';
import {AddFeedbackGymComponent} from './components/pages/add-feedback-gym/add-feedback-gym.component';
import {AddFeedbackCourseComponent} from './components/pages/add-feedback-course/add-feedback-course.component';

const routes: Routes = [
  { path: '', component: GymsComponent }, // , canActivate: [AuthGuardService]

  {path: ':idGym/feedbacks/add', component: AddFeedbackGymComponent, canActivate: [AuthGuardService]},
  {path: ':idGym/feedbacks/:idFeedback', component: AddFeedbackGymComponent, canActivate: [AuthGuardService]},

  {path: ':idGym/courses', component: CourseComponent}, // , canActivate: [AuthGuardService]
  {path: ':idGym/courses/:idCourse/feedbacks', component: FeedbackComponent}, // , canActivate: [AuthGuardService]
  {path: ':idGym/courses/:idCourse/feedbacks/add', component: AddFeedbackCourseComponent, canActivate: [AuthGuardService]},
  {path: ':idGym/courses/:idCourse/feedbacks/:idFeedback', component: AddFeedbackCourseComponent, canActivate: [AuthGuardService]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymsRoutingModule { }
