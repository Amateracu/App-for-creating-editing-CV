import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  HOME_BREADCRUMB,
  PROJECT_BREADCRUMB,
  PROJECT_CREATE_BREADCRUMB,
} from 'src/app/shared/constants/breadcrumbs.const';
import { PROJECTS_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';
import { AddProject } from 'src/app/store/projects/projects.actions';

@Component({
  selector: 'app-project-create-page',
  templateUrl: './project-create-page.component.html',
  styleUrls: ['./project-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCreatePageComponent implements OnInit {
  constructor(
    private breadcrumbsService: BreadcrumbsService,
    private store: Store,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb([
      HOME_BREADCRUMB,
      PROJECT_BREADCRUMB,
      PROJECT_CREATE_BREADCRUMB,
    ]);
  }

  public addProject(project: IProject): void {
    this.store.dispatch(AddProject({ project }));
    this.router.navigate([PROJECTS_ROUTE.path]);
  }

  public cancelProject(): void {
    this.router.navigate([PROJECTS_ROUTE.path]);
  }
}
