import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { EMPLOYEES_PARAM, EMPLOYEES_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IEmployees } from 'src/app/shared/interfaces/employees.interface';
import { EditEmployee, GetEmployeeById } from 'src/app/store/employees/employees.actions';
import { selectEmployeeById } from 'src/app/store/employees/employees.selectors';
@UntilDestroy()
@Component({
  selector: 'app-empoyees-profile-info',
  templateUrl: './empoyees-profile-info.component.html',
  styleUrls: ['./empoyees-profile-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpoyeesProfileInfoComponent implements OnInit {
  @Input() useButton = true;
  @Input() useInput = false;
  public form!: FormGroup;
  public employee: IEmployees;
  public employeeId: string;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params[EMPLOYEES_PARAM];
    if (this.employeeId) {
      this.store.dispatch(GetEmployeeById({ employeeId: this.employeeId }));
      this.store
        .select(selectEmployeeById)
        .pipe(
          untilDestroyed(this),
          filter((employee) => Boolean(employee) && this.employeeId === employee.id),
          filter((employee) => Boolean(employee)),
        )
        .subscribe((employee) => {
          this.employee = {
            ...employee,
            skills: [...employee.skills],
          };

          this.cdRef.markForCheck();
        });
    }
  }

  editEmployee(employee: IEmployees) {
    employee.id = this.employeeId;
    this.store.dispatch(EditEmployee({ employee }));
    this.router.navigate([EMPLOYEES_ROUTE.path]);
  }
}
