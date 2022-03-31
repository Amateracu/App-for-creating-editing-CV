import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  EMPLOYEES_PROFILE_ROUTE,
  EMPLOYEES_ROUTE,
} from 'src/app/shared/constants/routing-path.const';
import { IInfo } from 'src/app/shared/interfaces/info.interface';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesPageComponent {
  constructor(public router: Router) {}
  public profileElements: IInfo[] = [
    {
      id: 4356,
      firstName: 'Danik',
      lastName: 'Vasin',
      email: 'd@mail.ru',
      department: 'JavaScript',
      specialization: 'Angular',
    },
  ];
  public openProfilePage(row: any) {
    this.router.navigate([EMPLOYEES_ROUTE.path, row.id]);
  }
}
