import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { EMPLOYEES_COLUMNS } from 'src/app/modules/projects/pages/projects-page/constants/columns.const';
import { IColumn } from 'src/app/shared/components/base-table/interfaces/column.interface';
import {
  EMPLOYEES_BREADCRUMB,
  EMPLOYEES_PROFILE_BREADCRUMB,
  HOME_BREADCRUMB,
} from 'src/app/shared/constants/breadcrumbs.const';
import { EMPLOYEES_ADD_ROUTE, EMPLOYEES_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IBreadCrumb } from 'src/app/shared/interfaces/breadcrumbs.interface';
import { IEmployees } from 'src/app/shared/interfaces/employees.interface';
import { BreadcrumbsService } from 'src/app/shared/services/breadcrums.service';
import { GetEmployeesList } from 'src/app/store/employees/employees.actions';
import { selectEmployees } from 'src/app/store/employees/employees.selectors';

@UntilDestroy()
@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesPageComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[] = [HOME_BREADCRUMB, EMPLOYEES_BREADCRUMB];
  public profileElements!: IEmployees[];
  public columns: IColumn[] = EMPLOYEES_COLUMNS;

  constructor(
    public router: Router,
    public breadcrumbsService: BreadcrumbsService,
    private store: Store,
    private cdRef: ChangeDetectorRef,
  ) {
    this.profileElements = [];
  }

  public ngOnInit(): void {
    this.breadcrumbsService.updateBreadcrumb(this.breadcrumbs);
    this.store.dispatch(GetEmployeesList());
    this.store
      .select(selectEmployees)
      .pipe(untilDestroyed(this))
      .subscribe((employees) => {
        this.profileElements = [...employees].map((employee) => ({
          ...employee,
          skillsNames: employee.skills.map((item) => ' ' + item.name),
        }));
        this.cdRef.markForCheck();
      });
  }
  public routeAddEmployee(): void {
    this.router.navigate([EMPLOYEES_ROUTE.path, EMPLOYEES_ADD_ROUTE.path]);
  }
  public openProfilePage(row: IEmployees): void {
    this.router.navigate([EMPLOYEES_ROUTE.path, row.id]);
    EMPLOYEES_PROFILE_BREADCRUMB.label = row.firstName;
    EMPLOYEES_PROFILE_BREADCRUMB.description = row.firstName;
  }
}
