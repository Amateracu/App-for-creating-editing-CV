import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IColumn } from 'src/app/shared/components/base-table/interfaces/column.interface';
import { HOME_BREADCRUMB, PROJECT_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.const';
import { PROJECTS_CREATE_ROUTE, PROJECTS_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { IInfo } from 'src/app/shared/interfaces/info.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';
import { UrlService } from 'src/app/shared/services/url.service';
import { COLUMNS } from './constants/columns.const';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[] = [HOME_BREADCRUMB, PROJECT_BREADCRUMB];
  public cvElements!: IInfo[];

  public columns: IColumn[] = COLUMNS;

  constructor(
    public router: Router,
    public breadcrumbsService: BreadcrumbsService,
    private urlService: UrlService,
  ) {
    this.cvElements = urlService.cvElements;
  }
  ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb(this.breadcrumbs);
  }

  public openProjectInfo(row: IInfo) {
    this.router.navigate([PROJECTS_ROUTE.path, row.id]);
  }
  public routeAddProject() {
    this.router.navigate([PROJECTS_ROUTE.path, PROJECTS_CREATE_ROUTE.path]);
  }
}
