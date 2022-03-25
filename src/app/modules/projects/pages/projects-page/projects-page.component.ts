import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PROJECTS_INFO_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { ICv } from 'src/app/shared/interfaces/cv.interface';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
  constructor() {}
  public projectInfoRoute = '/' + PROJECTS_INFO_ROUTE.path;
  public cvElements: ICv[] = [
    {
      firstName: 'Danik',
      lastName: 'Vasin',
      email: 'd@mail.ru',
      department: 'JavaScript',
      specialization: 'Angular',
    },
  ];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'department', 'specialization'];
  clickedRows = new Set<ICv>();
}
