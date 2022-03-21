import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-employees-profile',
  templateUrl: './employees-profile.component.html',
  styleUrls: ['./employees-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesProfileComponent {
  constructor() {}
}
