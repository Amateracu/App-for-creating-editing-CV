import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import {
  IEmployees,
  ILanguages,
  IRoles,
  ISkills,
} from 'src/app/shared/interfaces/employees.interface';
import {
  GetLanguagesList,
  GetRolesList,
  GetSkillsList,
} from 'src/app/store/employees/employees.actions';
import {
  selectLanguages,
  selectRoles,
  selectSkills,
} from 'src/app/store/employees/employees.selectors';
@UntilDestroy()
@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesFormComponent implements OnInit, OnChanges {
  @Output() addEmployee = new EventEmitter<IEmployees>();
  @Output() cancelEmployee = new EventEmitter<any>();
  @Input() used = true;
  @Input() useButton = true;
  @Input() employeeById: IEmployees;
  public form: FormGroup;
  public allSkills: ISkills[] = [];
  public allLanguages: ILanguages[] = [];
  public allRoles: IRoles[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store,
    private cdRef: ChangeDetectorRef,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employeeById'] && changes['employeeById'].currentValue) {
      this.form.patchValue({
        firstName: this.employeeById.firstName,
        lastName: this.employeeById.lastName,
        email: this.employeeById.email,
        skills: this.employeeById.skills,
        department: this.employeeById.department,
        institution: this.employeeById.institution,
        diplomaProfession: this.employeeById.diplomaProfession,
        languages: this.employeeById.languages,
        role: this.employeeById.role,
      });
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      institution: ['', [Validators.required]],
      diplomaProfession: ['', [Validators.required]],
      skills: [[], [Validators.required]],
      role: [[], [Validators.required]],
      department: ['', [Validators.required]],
      languages: [[], [Validators.required]],
    });

    this.store.dispatch(GetSkillsList());
    this.store
      .select(selectSkills)
      .pipe(untilDestroyed(this))
      .subscribe((skills) => {
        this.allSkills = [...skills];
        this.cdRef.markForCheck();
      });

    this.store.dispatch(GetLanguagesList());
    this.store
      .select(selectLanguages)
      .pipe(untilDestroyed(this))
      .subscribe((languages) => {
        this.allLanguages = [...languages];
        this.cdRef.markForCheck();
      });
    this.store.dispatch(GetRolesList());
    this.store
      .select(selectRoles)
      .pipe(untilDestroyed(this))
      .subscribe((role) => {
        this.allRoles = [...role];
        this.cdRef.markForCheck();
      });
  }
  submit() {
    const employee: IEmployees = {
      ...this.form.getRawValue(),
      skills: this.form.get('skills').value.map((item: ISkills) => item.id),
      languages: this.form.get('languages').value.map((item: ILanguages) => item.id),
      role: this.form.get('role').value.id,
    };

    this.addEmployee.emit(employee);
    this.form.reset();
  }
  cancel() {
    this.cancelEmployee.emit();
  }
}
