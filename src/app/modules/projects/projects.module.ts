import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { DatepickerModule } from 'src/app/shared/controls/datepicker/datepicker.module';
import { InputModule } from 'src/app/shared/controls/input/input.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { ProjectCreatePageComponent } from './pages/project-create-page/project-create-page.component';
import { ProjectEditPageComponent } from './pages/project-edit-page/project-edit-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ProjectsPageComponent,
    ProjectEditPageComponent,
    ProjectCreatePageComponent,
    ProjectFormComponent,
  ],
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
    MatButtonModule,
  ],
  exports: [],
  providers: [],
})
export class ProjectsModule {}
