import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import {FavoriteGymCardComponent} from './component/favorite-gym-card/favorite-gym-card.component';
import {TitleComponent} from './component/title/title.component';
import {UpdateProfileComponent} from './component/update-profile/update-profile.component';
import {CardProfileComponent} from './component/card-profile/card-profile.component';
import {FavoriteCourseCardComponent} from './component/favorite-course-card/favorite-course-card.component';
import {FeedbackGymProfileComponent} from './component/feedback-gym-profile/feedback-gym-profile.component';
import {FeedbackCourseProfileComponent} from './component/feedback-course-profile/feedback-course-profile.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent, TitleComponent,
    CardProfileComponent, UpdateProfileComponent,
    FavoriteCourseCardComponent, FavoriteGymCardComponent,
    FeedbackGymProfileComponent, FeedbackCourseProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProfileModule { }
