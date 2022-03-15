import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [EmployeesPageComponent],
  imports: [CommonModule, EmployeeRoutingModule],
  exports: [],
  providers: [],
})
export class EmployeeModule {}
