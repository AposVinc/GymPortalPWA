import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HomeComponent} from './components/pages/home/home.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {GymComponent} from './components/pages/gym/gym.component';
import {CourseComponent} from './components/pages/course/course.component';
import {FeedbackComponent} from './components/pages/feedback/feedback.component';
import {LoginComponent} from './components/pages/login/login.component';
import {HeaderComponent} from './components/commons/header/header.component';
import {FooterComponent} from './components/commons/footer/footer.component';
import {RegionComponent} from './components/component/region/region.component';
import {GymCardComponent} from './components/component/gym-card/gym-card.component';
import {HttpClientModule} from '@angular/common/http';
import {CourseCardComponent} from './components/component/course-card/course-card.component';
import {FeedbackGymCardComponent} from './components/component/feedback-gym-card/feedback-gym-card.component';
import {FeedbackCourseCardComponent} from './components/component/feedback-course-card/feedback-course-card.component';
import {RegistrationComponent} from './components/pages/registration/registration.component';
import {RegistrationFormComponent} from './components/component/registration-form/registration-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginFormComponent} from './components/component/login-form/login-form.component';
import {JwtModule} from '@auth0/angular-jwt';
import {FeedbackGymProfileComponent} from './components/component/feedback-gym-profile/feedback-gym-profile.component';
import {FeedbackCourseProfileComponent} from './components/component/feedback-course-profile/feedback-course-profile.component';
import {FavoriteGymCardComponent} from './components/component/favorite-gym-card/favorite-gym-card.component';
import {FavoriteCourseCardComponent} from './components/component/favorite-course-card/favorite-course-card.component';
import {AddFeedbackComponent} from './components/pages/add-feedback/add-feedback.component';
import {AddFeedbackCourseComponent} from './components/pages/add-feedback-course/add-feedback-course.component';
import {UpdateProfileComponent} from './components/component/update-profile/update-profile.component';
import {CardProfileComponent} from './components/component/card-profile/card-profile.component';
import {appReducers, localStorageSyncReducer} from './reducers/app.reducers';
import {MetaReducer, StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {AuthService} from './services/auth/auth.service';
import {UserService} from './services/user.service';
import {GymService} from './services/gym.service';
import {CourseService} from './services/course.service';
import {FavoriteService} from './services/favorite.service';
import {FeedbackProfileService} from './services/feedback-profile.service';
import {FeedbackGymService} from './services/feedback-gym.service';
import {FeedbackCourseService} from './services/feedback-course.service';

import {EffectsModule} from '@ngrx/effects';
import {CommonEffects} from './effects/common-effects.service';
import {UserEffects} from './effects/user-effects.service';
import {GymEffects} from './effects/gym-effects.service';
import {CourseEffects} from './effects/course-effects.service';
import {FeedbacksProfileEffects} from './effects/feedback-profile-effects.service';
import {FeedbacksGymEffects} from './effects/feedback-gym-effects.service';
import {FeedbacksCourseEffects} from './effects/feedback-course-effects.service';
import {FavoriteEffects} from './effects/favorite-effects.service';
import { TitleComponent } from './components/component/title/title.component';
import { ScrollToTopComponent } from './components/commons/scroll-to-top/scroll-to-top.component';

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    GymComponent,
    CourseComponent,
    FeedbackComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegionComponent,
    GymCardComponent,
    CourseCardComponent,
    FeedbackGymCardComponent,
    FeedbackCourseCardComponent,
    RegistrationComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    FeedbackGymProfileComponent,
    FeedbackCourseProfileComponent,
    FavoriteGymCardComponent,
    FavoriteCourseCardComponent,
    AddFeedbackComponent,
    AddFeedbackCourseComponent,
    UpdateProfileComponent,
    CardProfileComponent,
    TitleComponent,
    ScrollToTopComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      appReducers,
      {metaReducers}
      ),
    EffectsModule.forRoot([
      CommonEffects, UserEffects, FeedbacksProfileEffects, FavoriteEffects,
      GymEffects, FeedbacksGymEffects,
      CourseEffects, FeedbacksCourseEffects
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        allowedDomains: ['localhost:']
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    AuthService, UserService,
    GymService, CourseService, FavoriteService,
    FeedbackProfileService, FeedbackGymService, FeedbackCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
