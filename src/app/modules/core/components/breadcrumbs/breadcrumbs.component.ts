import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';

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
    this.breadcrumbsService.getBreadCrumbs().subscribe((data: IBreadCrumb[]) => {
      this.pageTitle = data[data.length - 1]?.title || '';
      this.pageDescription = data[data.length - 1]?.description || '';
    });
  }
}
