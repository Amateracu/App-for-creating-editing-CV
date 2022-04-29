import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  EMPLOYEES_ADD_BREADCRUMB,
  EMPLOYEES_BREADCRUMB,
  HOME_BREADCRUMB,
} from 'src/app/shared/constants/breadcrumbs.const';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';

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
  constructor() {}

  ngOnInit(): void {}
}
