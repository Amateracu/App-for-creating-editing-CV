import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { DatepickerModule } from 'src/app/shared/controls/datepicker/datepicker.module';
import { InputModule } from 'src/app/shared/controls/input/input.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeesProfileComponent } from './pages/employees-profile/employees-profile.component';
import { EmpoyeesProfileCvComponent } from './pages/empoyees-profile-cv/empoyees-profile-cv.component';
import { EmpoyeesProfileInfoComponent } from './pages/empoyees-profile-info/empoyees-profile-info.component';

@NgModule({
  declarations: [
    EmployeesPageComponent,
    EmployeesProfileComponent,
    EmpoyeesProfileInfoComponent,
    EmpoyeesProfileCvComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    TranslateModule,
    InputModule,
    DatepickerModule,
  ],
  exports: [],
  providers: [],
})
export class EmployeeModule {}
