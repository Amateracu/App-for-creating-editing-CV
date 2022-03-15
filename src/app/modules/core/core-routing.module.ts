import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((module) => module.DashboardModule),
  },
  {
    path: 'empoloyees',
    loadChildren: () =>
      import('../employees/employee.module').then((module) => module.EmployeeModule),
  },
  {
    path: 'project',
    loadChildren: () => import('../project/project.module').then((module) => module.ProjectModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
