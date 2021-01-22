import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {LoginComponent} from './components/pages/login/login.component';
import {AdminGuardService} from '../../helpers/guard/admin-guard.service';

const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AdminGuardService] },
  { path: 'login', component: LoginComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
