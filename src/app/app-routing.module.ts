import { HrpageComponent } from './referal/hrpage/hrpage.component';
import { NonEmployeeComponent } from './referal/nonemployee/nonemployee.component';
import { EmployeeComponent } from './referal/employee/employee.component';
import { ReferalComponent } from './referal/referal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'referal',
  component: ReferalComponent,
},
{
  path: 'referal/emp',
  component: EmployeeComponent,

},
{
  path: 'referal/nonemp',
  component: NonEmployeeComponent,
},
{
  path: 'referal/hrpage/:id',
  component: HrpageComponent,
},
{
  path: 'referal/hrdash',
  loadChildren: () => import ('./hr-dashboard/hr-dashboard.module').then(m => m.HrDashboardModule)
},
{ path: '', redirectTo: '/referal', pathMatch: 'full' },
{ path: '**', redirectTo: '/referal', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
