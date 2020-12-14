import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {LoginComponent} from './components/pages/login/login.component';
import {FeedbackComponent} from './components/pages/feedback/feedback.component';
import {GymComponent} from './components/pages/gym/gym.component';
import {CourseComponent} from './components/pages/course/course.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {RegistrationComponent} from './components/pages/registration/registration.component';
import {AuthGuardService} from './services/auth/auth-guard.service';
import {AddFeedbackComponent} from './components/pages/add-feedback/add-feedback.component';
import {AddFeedbackCourseComponent} from './components/pages/add-feedback-course/add-feedback-course.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, // , canActivate: [AuthGuardService]
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},

  {path: 'regions/:region/gyms', component: GymComponent}, // , canActivate: [AuthGuardService]
  {path: 'regions/:region/gyms/:idGym/feedbacks/add', component: AddFeedbackComponent, canActivate: [AuthGuardService]},
  {path: 'regions/:region/gyms/:idGym/feedbacks/:idFeedback', component: AddFeedbackComponent, canActivate: [AuthGuardService]},

  {path: 'regions/:region/gyms/:idGym/courses', component: CourseComponent}, // , canActivate: [AuthGuardService]
  {path: 'regions/:region/gyms/:idGym/courses/:idCourse/feedbacks', component: FeedbackComponent}, // , canActivate: [AuthGuardService]
  {path: 'regions/:region/gyms/:idGym/courses/:idCourse/feedbacks/add', component: AddFeedbackCourseComponent, canActivate: [AuthGuardService]},
  {path: 'regions/:region/gyms/:idGym/courses/:idCourse/feedbacks/:idFeedback', component: AddFeedbackCourseComponent, canActivate: [AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
