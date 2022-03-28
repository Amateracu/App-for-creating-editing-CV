import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PROJECTS_INFO_ROUTE, PROJECTS_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
  },
  {
    path: PROJECTS_INFO_ROUTE.path,
    component: ProjectInfoComponent,
    data: {
      breadcrumb: PROJECTS_INFO_ROUTE.breadcrumb,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
