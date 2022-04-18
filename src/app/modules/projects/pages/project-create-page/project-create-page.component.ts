import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  HOME_BREADCRUMB,
  PROJECT_BREADCRUMB,
  PROJECT_CREATE_BREADCRUMB,
} from 'src/app/shared/constants/breadcrumbs.const';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';

@Component({
  selector: 'app-project-create-page',
  templateUrl: './project-create-page.component.html',
  styleUrls: ['./project-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCreatePageComponent implements OnInit {
  constructor(private breadcrumbsService: BreadcrumbsService) {}

  public breadcrumbs: IBreadCrumb[] = [
    HOME_BREADCRUMB,
    PROJECT_BREADCRUMB,
    PROJECT_CREATE_BREADCRUMB,
  ];

  ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb(this.breadcrumbs);
  }
}
