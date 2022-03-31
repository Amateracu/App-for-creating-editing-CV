import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EMPLOYEES_PROFILE_ROUTE,
  EMPLOYEES_ROUTE,
} from 'src/app/shared/constants/routing-path.const';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeesProfileComponent } from './pages/employees-profile/employees-profile.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPageComponent,
  },
  {
    path: EMPLOYEES_PROFILE_ROUTE.path,
    component: EmployeesProfileComponent,
    data: {
      breadcrumb: EMPLOYEES_PROFILE_ROUTE.breadcrumb,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
