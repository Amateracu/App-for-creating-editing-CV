import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { AutocompleteFormModule } from 'src/app/shared/controls/autocomplete-form/autocomplete-form.module';
import { DatepickerModule } from 'src/app/shared/controls/datepicker/datepicker.module';
import { InputAutocompleteModule } from 'src/app/shared/controls/input-autocomplete/input-autocomplete.module';
import { InputSelectModule } from 'src/app/shared/controls/input-select/input-select.module';
import { InputModule } from 'src/app/shared/controls/input/input.module';
import { ProjectsModule } from '../projects/projects.module';
import { EducationFormComponent } from './components/education-form/education-form.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { LanguagesFormComponent } from './components/languages-form/languages-form.component';
import { ProjectsFormComponent } from './components/project-form/project-form.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeesProfileComponent } from './pages/employees-profile/employees-profile.component';
import { EmpoyeesProfileCvComponent } from './pages/empoyees-profile-cv/empoyees-profile-cv.component';
import { EmpoyeesProfileInfoComponent } from './pages/empoyees-profile-info/empoyees-profile-info.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    EmployeesPageComponent,
    EmployeesProfileComponent,
    EmpoyeesProfileInfoComponent,
    EmpoyeesProfileCvComponent,
    EmployeesFormComponent,
    AddEmployeeComponent,
    GeneralFormComponent,
    EducationFormComponent,
    LanguagesFormComponent,
    ProjectsFormComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTabsModule,
    MatIconModule,
    FormsModule,
    ProjectsModule,
    ReactiveFormsModule,
    TranslateModule,
    InputModule,
    DatepickerModule,
    InputAutocompleteModule,
    InputSelectModule,
    AutocompleteFormModule,
    MatButtonModule,
    MatTableModule,
    BaseTableModule,
    MatExpansionModule,
    MatListModule,
  ],
})
export class EmployeeModule {}
