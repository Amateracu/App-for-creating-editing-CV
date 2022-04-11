import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  HOME_BREADCRUMB,
  PROJECT_BREADCRUMB,
  PROJECT_INFO_BREADCRUMB,
} from 'src/app/shared/constants/breadcrumbs.const';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';

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
  constructor(public breadcrumbsService: BreadcrumbsService) {}
  ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb(this.breadcrumbs);
  }
}
