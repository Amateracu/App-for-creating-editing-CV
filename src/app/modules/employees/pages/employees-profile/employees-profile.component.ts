import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';

@Component({
  selector: 'app-employees-profile',
  templateUrl: './employees-profile.component.html',
  styleUrls: ['./employees-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesProfileComponent {
  constructor(public breadrumbs: BreadcrumbsService) {}
}
