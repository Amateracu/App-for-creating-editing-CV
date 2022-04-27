import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
