import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { HrDashboardRoutingModule } from './hr-dashboard-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardViewComponent } from './dashboard-view.component';
import { JobsComponent } from './jobs/jobs.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [LoginComponent, DashboardViewComponent, JobsComponent],
  imports: [
    CommonModule,
    HrDashboardRoutingModule,
    DropdownModule,
    TableModule,
    FormsModule,
    ButtonModule
  ]
})
export class HrDashboardModule { }
