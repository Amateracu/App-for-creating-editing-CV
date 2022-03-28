import { Input } from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  DASHBOARD_ROUTE,
  EMPLOYEES_ROUTE,
  PROJECTS_ROUTE,
} from 'src/app/shared/constants/routing-path.const';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  public opened = true;
  public projectRoute = '/' + PROJECTS_ROUTE.path;
  public dashboardRoute = '/' + DASHBOARD_ROUTE.path;
  public employeesRoute = '/' + EMPLOYEES_ROUTE.path;
  constructor(private router: Router) {}
}
