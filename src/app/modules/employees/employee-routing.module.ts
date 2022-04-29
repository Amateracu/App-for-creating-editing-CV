import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EMPLOYEES_ADD_ROUTE,
  EMPLOYEES_PROFILE_ROUTE,
  EMPLOYEES_ROUTE,
} from 'src/app/shared/constants/routing-path.const';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeesProfileComponent } from './pages/employees-profile/employees-profile.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPageComponent,
  },
  {
    path: EMPLOYEES_ADD_ROUTE.path,
    component: AddEmployeeComponent,
  },
  {
    path: EMPLOYEES_PROFILE_ROUTE.path,
    component: EmployeesProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
