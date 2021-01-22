import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {LoginComponent} from './components/pages/login/login.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {RegistrationComponent} from './components/pages/registration/registration.component';
import {AuthGuardService} from './helpers/guard/auth-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent}, // , canActivate: [AuthGuardService]
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},

  { path: 'regions/:region/gyms', loadChildren: () => import('./modules/gyms/gyms.module').then(m => m.GymsModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
