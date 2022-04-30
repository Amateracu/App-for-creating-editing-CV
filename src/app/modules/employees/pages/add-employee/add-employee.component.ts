import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  EMPLOYEES_ADD_BREADCRUMB,
  EMPLOYEES_BREADCRUMB,
  HOME_BREADCRUMB,
} from 'src/app/shared/constants/breadcrumbs.const';
import { EMPLOYEES_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { IEmployees } from 'src/app/shared/interfaces/employees.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';
import { AddEmployee } from 'src/app/store/employees/employees.actions';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeeComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[] = [
    HOME_BREADCRUMB,
    EMPLOYEES_BREADCRUMB,
    EMPLOYEES_ADD_BREADCRUMB,
  ];
  constructor(
    public breadcrumbsService: BreadcrumbsService,
    private store: Store,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb(this.breadcrumbs);
  }
  addEmployee(employee: IEmployees) {
    this.store.dispatch(AddEmployee({ employee }));
    this.router.navigate([EMPLOYEES_ROUTE.path]);
  }
  cancelEmployee() {
    this.router.navigate([EMPLOYEES_ROUTE.path]);
  }
}
