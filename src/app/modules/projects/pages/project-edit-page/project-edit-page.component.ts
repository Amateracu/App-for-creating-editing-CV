import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import {
  HOME_BREADCRUMB,
  PROJECT_BREADCRUMB,
  PROJECT_INFO_BREADCRUMB,
} from 'src/app/shared/constants/breadcrumbs.const';
import { PROJECTS_ROUTE, PROJECT_PARAM } from 'src/app/shared/constants/routing-path.const';
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
  public project: IProject;
  public projectId: string;

  constructor(
    public breadcrumbsService: BreadcrumbsService,
    private store: Store,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb([
      HOME_BREADCRUMB,
      PROJECT_BREADCRUMB,
      PROJECT_INFO_BREADCRUMB,
    ]);
    this.initProject();
  }

  public editProject(project: IProject): void {
    project.id = this.projectId;
    this.store.dispatch(EditProject({ project }));
    this.router.navigate([PROJECTS_ROUTE.path]);
  }

  public initProject(): void {
    this.projectId = this.route.snapshot.params[PROJECT_PARAM];
    if (this.projectId) {
      this.store.dispatch(GetProjectById({ projectId: this.projectId }));
      this.store
        .select(selectProjectById)
        .pipe(
          untilDestroyed(this),
          filter((project) => Boolean(project) && this.projectId === project.id),
        )
        .subscribe((project) => {
          this.project = {
            ...project,
            projectRoles: [...project.projectRoles],
            specializations: [...project.specializations],
            responsibilities: [...project.responsibilities],
          };

          this.cdRef.markForCheck();
        });
    }
  }
}
