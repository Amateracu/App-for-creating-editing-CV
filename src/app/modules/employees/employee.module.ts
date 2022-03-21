import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeesProfileComponent } from './pages/employees-profile/employees-profile.component';
import { EmpoyeesProfileInfoComponent } from './pages/empoyees-profile-info/empoyees-profile-info.component';
import { EmpoyeesProfileCvComponent } from './pages/empoyees-profile-cv/empoyees-profile-cv.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  exports: [],
  providers: [],
})
export class EmployeeModule {}
