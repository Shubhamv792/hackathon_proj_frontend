import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrDashboardRoutingModule } from './hr-dashboard-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardViewComponent } from './dashboard-view.component';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [LoginComponent, DashboardViewComponent, JobsComponent],
  imports: [
    CommonModule,
    HrDashboardRoutingModule
  ]
})
export class HrDashboardModule { }
