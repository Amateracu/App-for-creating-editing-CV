import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ICvTabs } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'app-empoyees-profile-cv',
  templateUrl: './empoyees-profile-cv.component.html',
  styleUrls: ['./empoyees-profile-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpoyeesProfileCvComponent {
  public cvTabs: ICvTabs[] = [
    { content: 'cv1', label: '1' },
    { content: 'cv2', label: '2' },
    { content: 'cv3', label: '3' },
  ];
}
