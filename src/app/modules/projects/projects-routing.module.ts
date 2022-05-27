import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PROJECTS_CREATE_ROUTE,
  PROJECTS_INFO_ROUTE,
} from 'src/app/shared/constants/routing-path.const';
import { ProjectCreatePageComponent } from './pages/project-create-page/project-create-page.component';
import { ProjectEditPageComponent } from './pages/project-edit-page/project-edit-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
  },
  {
    path: PROJECTS_CREATE_ROUTE.path,
    component: ProjectCreatePageComponent,
  },
  {
    path: PROJECTS_INFO_ROUTE.path,
    component: ProjectEditPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
