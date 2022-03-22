import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PROJECTS_INFO } from 'src/app/shared/constants/routing-path.const';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: PROJECTS_INFO.path,
    component: ProjectsPageComponent,
    data: {
      breadcrumb: PROJECTS_INFO.breadCrumb,
    },
  },
  {
    path: 'info',
    component: ProjectInfoComponent,
    data: {
      breadcrumb: 'Info',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
