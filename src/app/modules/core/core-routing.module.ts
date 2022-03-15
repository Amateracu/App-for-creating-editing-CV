import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DASHBOARD_ROUTE,
  EMPLOYEES_ROUTE,
  PROJECTS_ROUTE,
} from 'src/app/shared/constants/routing-path.const';
import { CorePageComponent } from './pages/core-page/core-page.component';

const routes: Routes = [
  {
    path: '',
    component: CorePageComponent,
    children: [
      {
        path: DASHBOARD_ROUTE,
        loadChildren: () =>
          import('../dashboard/dashboard.module').then((module) => module.DashboardModule),
      },
      {
        path: EMPLOYEES_ROUTE,
        loadChildren: () =>
          import('../employees/employee.module').then((module) => module.EmployeeModule),
      },
      {
        path: PROJECTS_ROUTE,
        loadChildren: () =>
          import('../projects/projects.module').then((module) => module.ProjectsModule),
      },
      { path: '**', redirectTo: DASHBOARD_ROUTE },
    ],
  },
  { path: '**', redirectTo: DASHBOARD_ROUTE },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
