import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
  declarations: [ProjectsPageComponent, ProjectInfoComponent],
  imports: [CommonModule, ProjectsRoutingModule, BreadcrumbModule],
  exports: [],
  providers: [],
})
export class ProjectsModule {}
