import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
  },
  {
    path: 'info',
    component: ProjectInfoComponent,
    data: {
      breadcrumb: 'Info',
    },
    children: [
      {
        path: 'page',
        component: ProjectsPageComponent,
        data: {
          breadcrumb: 'Page',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
