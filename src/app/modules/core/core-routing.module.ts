import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CORE_ROUTE,
  DASHBOARD_ROUTE,
  EMPLOYEES_ROUTE,
  PROJECTS_ROUTE,
} from 'src/app/shared/constants/routing-path.const';
import { CorePageComponent } from './pages/core-page/core-page.component';

const routes: Routes = [
  {
    path: CORE_ROUTE.path,
    component: CorePageComponent,
    data: {
      breadcrumb: CORE_ROUTE.breadCrumb,
    },
    children: [
      {
        path: DASHBOARD_ROUTE.path,
        loadChildren: () =>
          import('../dashboard/dashboard.module').then((module) => module.DashboardModule),
        data: {
          breadcrumb: DASHBOARD_ROUTE.breadCrumb,
        },
      },
      {
        path: EMPLOYEES_ROUTE.path,
        loadChildren: () =>
          import('../employees/employee.module').then((module) => module.EmployeeModule),
        data: {
          breadcrumb: EMPLOYEES_ROUTE.breadCrumb,
        },
      },
      {
        path: PROJECTS_ROUTE.path,
        loadChildren: () =>
          import('../projects/projects.module').then((module) => module.ProjectsModule),
        data: {
          breadcrumb: PROJECTS_ROUTE.breadCrumb,
        },
      },
      { path: '**', redirectTo: DASHBOARD_ROUTE.path },
    ],
  },
  { path: '**', redirectTo: DASHBOARD_ROUTE.path },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
