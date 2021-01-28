import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HomeComponent} from './components/pages/home/home.component';
import {LoginComponent} from './components/pages/login/login.component';
import {HeaderComponent} from './components/commons/header/header.component';
import {FooterComponent} from './components/commons/footer/footer.component';
import {RegionComponent} from './components/component/region/region.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RegistrationComponent} from './components/pages/registration/registration.component';
import {RegistrationFormComponent} from './components/component/registration-form/registration-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginFormComponent} from './components/component/login-form/login-form.component';
import {JwtModule} from '@auth0/angular-jwt';
import {appReducers, localStorageSyncReducer} from './reducers/app.reducers';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

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
import {TitleComponent} from './components/component/title/title.component';
import {ScrollToTopComponent} from './components/commons/scroll-to-top/scroll-to-top.component';
import {ErrorInterceptor} from './helpers/error.interceptor';

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegionComponent,
    RegistrationComponent,
    RegistrationFormComponent,
    LoginFormComponent,
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
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    AuthService, UserService,
    GymService, CourseService, FavoriteService,
    FeedbackProfileService, FeedbackGymService, FeedbackCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
