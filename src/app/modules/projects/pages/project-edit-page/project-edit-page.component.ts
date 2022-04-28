import { HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { filter, Observable, switchMap } from 'rxjs';
import {
  HOME_BREADCRUMB,
  PROJECT_BREADCRUMB,
  PROJECT_INFO_BREADCRUMB,
} from 'src/app/shared/constants/breadcrumbs.const';
import { PROJECTS_ROUTE, PROJECT_PARAM } from 'src/app/shared/constants/routing-path.const';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';
import { EditProject, GetProjectById } from 'src/app/store/projects/projects.actions';
import { selectProjectById } from 'src/app/store/projects/projects.selectors';
@UntilDestroy()
@Component({
  selector: 'app-project-edit-page',
  templateUrl: './project-edit-page.component.html',
  styleUrls: ['./project-edit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectEditPageComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[] = [
    HOME_BREADCRUMB,
    PROJECT_BREADCRUMB,
    PROJECT_INFO_BREADCRUMB,
  ];
  public project: IProject;
  public projectId: string;
  constructor(
    public breadcrumbsService: BreadcrumbsService,
    private store: Store,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb(this.breadcrumbs);
    this.projectId = this.route.snapshot.params[PROJECT_PARAM];
    if (this.projectId) {
      this.store.dispatch(GetProjectById({ projectId: this.projectId }));
      this.store
        .select(selectProjectById)
        .pipe(
          untilDestroyed(this),
          filter((project) => Boolean(project) && this.projectId === project.id),
          filter((project) => Boolean(project)),
        )
        .subscribe((project) => {
          this.project = { ...project };

          this.cdRef.markForCheck();
        });
    }
  }
  editProject(project: IProject) {
    project.id = this.projectId;
    this.store.dispatch(EditProject({ project }));
    this.router.navigate([PROJECTS_ROUTE.path]);
  }
}
