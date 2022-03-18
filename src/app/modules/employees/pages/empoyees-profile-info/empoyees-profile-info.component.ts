import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-empoyees-profile-info',
  templateUrl: './empoyees-profile-info.component.html',
  styleUrls: ['./empoyees-profile-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmpoyeesProfileInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
