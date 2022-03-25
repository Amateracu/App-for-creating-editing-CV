import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMPLOYEES_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPageComponent,
    data: {
      breadCrumb: EMPLOYEES_ROUTE.breadCrumb,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
