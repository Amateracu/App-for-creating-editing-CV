import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectInfoComponent } from './pages/project-info/project-info.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/controls/input/input.module';
import { DatepickerModule } from 'src/app/shared/controls/datepicker/datepicker.module';
import { TranslateModule } from '@ngx-translate/core';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';

@NgModule({
  declarations: [ProjectsPageComponent, ProjectInfoComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    DatepickerModule,
    TranslateModule,
    BaseTableModule,
  ],
  exports: [],
  providers: [],
})
export class ProjectsModule {}
