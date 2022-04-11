import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { COLUMNS } from 'src/app/modules/projects/pages/projects-page/constants/columns.const';
import { IColumn } from 'src/app/shared/components/base-table/interfaces/column.interface';
import { HOME_BREADCRUMB, EMPLOYEES_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.const';
import {
  EMPLOYEES_PROFILE_ROUTE,
  EMPLOYEES_ROUTE,
} from 'src/app/shared/constants/routing-path.const';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { IInfo } from 'src/app/shared/interfaces/info.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';
import { UrlService } from 'src/app/shared/services/url.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesPageComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[] = [HOME_BREADCRUMB, EMPLOYEES_BREADCRUMB];
  constructor(
    public router: Router,
    public breadcrumbsService: BreadcrumbsService,
    private urlService: UrlService,
  ) {
    this.profileElements = urlService.cvElements;
  }
  ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb(this.breadcrumbs);
  }
  public profileElements!: IInfo[];

  public columns: IColumn[] = COLUMNS;
  public openProfilePage(row: IInfo) {
    this.router.navigate([EMPLOYEES_ROUTE.path, row.id]);
  }
}
