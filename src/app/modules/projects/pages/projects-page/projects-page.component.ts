import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IColumn } from 'src/app/shared/components/base-table/interfaces/column.interface';
import { PROJECTS_INFO_ROUTE, PROJECTS_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IInfo } from 'src/app/shared/interfaces/info.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';
import { COLUMNS } from './constants/columns.const';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
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

  public columns: IColumn[] = COLUMNS;

  constructor(public router: Router, public breadrumbs: BreadcrumbsService) {}

  public openProjectInfo(row: IInfo) {
    this.router.navigate([PROJECTS_ROUTE.path, row.id]);
  }
}
