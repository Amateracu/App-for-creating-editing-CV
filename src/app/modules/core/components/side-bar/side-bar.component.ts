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
  public opened = false;
  constructor(private router: Router) {}
  dashboard() {
    this.router.navigate([DASHBOARD_ROUTE.path]);
  }
  employees() {
    this.router.navigate([EMPLOYEES_ROUTE.path]);
  }
  projects() {
    this.router.navigate([PROJECTS_ROUTE.path]);
  }
}
