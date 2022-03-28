import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PROJECTS_INFO_ROUTE, PROJECTS_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IInfo } from 'src/app/shared/interfaces/info.interface';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
  constructor(public router: Router) {}
  public cvElements: IInfo[] = [
    {
      id: 1232,
      firstName: 'Danik',
      lastName: 'Vasin',
      email: 'd@mail.ru',
      department: 'JavaScript',
      specialization: 'Angular',
    },
  ];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'department', 'specialization'];
  clickedRows = new Set<IInfo>();
  public routeInfo(row: any) {
    console.log(row);
    this.router.navigate([PROJECTS_ROUTE.path, row.id]);
  }
}
