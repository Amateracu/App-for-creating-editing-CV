import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input() public isToogle!: boolean;
  public projectRoute = '/' + PROJECTS_ROUTE.path;
  public dashboardRoute = '/' + DASHBOARD_ROUTE.path;
  public employeesRoute = '/' + EMPLOYEES_ROUTE.path;
  constructor() {}
}
