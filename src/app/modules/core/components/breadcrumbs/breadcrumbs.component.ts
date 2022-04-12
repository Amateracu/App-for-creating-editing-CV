import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';

@UntilDestroy()
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs$!: Observable<IBreadCrumb[]>;
  public pageTitle!: string;
  public pageDescription!: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private breadcrumbsService: BreadcrumbsService,
  ) {}
  ngOnInit() {
    this.breadcrumbs$ = this.breadcrumbsService.getBreadCrumbs();
    this.breadcrumbsService
      .getBreadCrumbs()
      .pipe(untilDestroyed(this))
      .subscribe((data: IBreadCrumb[]) => {
        this.pageTitle = data[data.length - 1]?.title || '';
        this.pageDescription = data[data.length - 1]?.description || '';
      });
  }
}
