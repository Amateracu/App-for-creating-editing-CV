import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { BaseTableModule } from 'src/app/shared/components/base-table/base-table.module';
import { DatepickerModule } from 'src/app/shared/controls/datepicker/datepicker.module';
import { InputModule } from 'src/app/shared/controls/input/input.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeesProfileComponent } from './pages/employees-profile/employees-profile.component';
import { EmpoyeesProfileCvComponent } from './pages/empoyees-profile-cv/empoyees-profile-cv.component';
import { EmpoyeesProfileInfoComponent } from './pages/empoyees-profile-info/empoyees-profile-info.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { InputAutocompleteModule } from 'src/app/shared/controls/input-autocomplete/input-autocomplete.module';

@NgModule({
  declarations: [
    EmployeesPageComponent,
    EmployeesProfileComponent,
    EmpoyeesProfileInfoComponent,
    EmpoyeesProfileCvComponent,
    EmployeesFormComponent,
    AddEmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    InputModule,
    DatepickerModule,
    InputAutocompleteModule,
    MatButtonModule,
    MatTableModule,
    BaseTableModule,
  ],
  exports: [],
  providers: [],
})
export class EmployeeModule {}
