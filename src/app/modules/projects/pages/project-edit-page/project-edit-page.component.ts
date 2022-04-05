import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PROJECTS_INFO_ROUTE, PROJECTS_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';

@Component({
  selector: 'app-project-edit-page',
  templateUrl: './project-edit-page.component.html',
  styleUrls: ['./project-edit-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectEditPageComponent implements OnInit {
  public form!: FormGroup;
  public submitted = false;
  public breadcrumb: IBreadCrumb = {
    label: 'Project',
    url: PROJECTS_INFO_ROUTE.path,
    title: 'Project',
    description: 'Project info',
  };
  constructor(private formBuilder: FormBuilder, public breadrumbs: BreadcrumbsService) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      teamSize: ['', [Validators.required]],
      techStack: ['', [Validators.required]],
      roles: ['', [Validators.required]],
      description: ['', [Validators.required]],
      responsibilities: ['', [Validators.required]],
    });
  }
  submit() {}
}
