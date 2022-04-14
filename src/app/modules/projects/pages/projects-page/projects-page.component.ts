import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { IColumn } from 'src/app/shared/components/base-table/interfaces/column.interface';
import { HOME_BREADCRUMB, PROJECT_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.const';
import { PROJECTS_CREATE_ROUTE, PROJECTS_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';
import { GetProjectsList } from 'src/app/store/projects/projects.actions';
import { selectProjects } from 'src/app/store/projects/projects.selectors';
import { COLUMNS } from './constants/columns.const';

@UntilDestroy()
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[] = [HOME_BREADCRUMB, PROJECT_BREADCRUMB];
  public cvElements!: IProject[];

  public columns: IColumn[] = COLUMNS;

  constructor(
    private router: Router,
    private breadcrumbsService: BreadcrumbsService,
    private store: Store,
    private cdRef: ChangeDetectorRef,
  ) {
    this.cvElements = [];
  }
  ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb(this.breadcrumbs);
    this.store.dispatch(GetProjectsList());
    this.store
      .select(selectProjects)
      .pipe(untilDestroyed(this))
      .subscribe((projects) => {
        this.cvElements = [...projects].map((project) => ({
          ...project,
          specializationsNames: project.specializations.map((item) => item.name),
          responsibilitiesNames: project.responsibilities.map((item) => item.name),
        }));
        this.cdRef.markForCheck();
      });
  }

  public openProjectInfo(row: IProject) {
    this.router.navigate([PROJECTS_ROUTE.path, row.id]);
  }
  public routeAddProject() {
    this.router.navigate([PROJECTS_ROUTE.path, PROJECTS_CREATE_ROUTE.path]);
  }
}
