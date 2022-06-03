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
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { IRoles } from 'src/app/shared/interfaces/employees.interface';
import {
  IProject,
  IResponsibility,
  ISpecialization,
} from 'src/app/shared/interfaces/project.interface';
import {
  GetProjectRolesList,
  GetResponsibilitiesList,
  GetSpecializationsList,
} from 'src/app/store/projects/projects.actions';
import {
  selectProjectRoles,
  selectResponsibilities,
  selectSpecializations,
} from 'src/app/store/projects/projects.selectors';
@UntilDestroy()
@Component({
  selector: 'app-projects-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsFormComponent implements OnInit, OnChanges {
  @Input() public addProject: boolean;
  @Input() public project: IProject;
  @Output() public saveProject = new EventEmitter<IProject>();

  public allSpecializations: ISpecialization[] = [];
  public allRoles: IRoles[] = [];
  public allResponsibilities: IResponsibility[] = [];
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private cdRef: ChangeDetectorRef,
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      secondName: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      teamSize: [null, [Validators.required]],
      tasksPerformed: ['', [Validators.required]],
      description: ['', [Validators.required]],
      projectRoles: [[], [Validators.required]],
      specializations: [[], [Validators.required]],
      responsibilities: [[], [Validators.required]],
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['project'] && changes['project'].currentValue) {
      this.form.patchValue({
        ...this.project,
      });
    }
  }

  public ngOnInit(): void {
    this.initProjects();
  }

  public submit(): void {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }
    const editProject = {
      ...this.project,
      ...this.form.getRawValue(),
    };
    this.saveProject.emit(editProject);
  }

  public cancel(): void {
    this.form.reset();
  }

  public initProjects(): void {
    this.store.dispatch(GetProjectRolesList());
    this.store
      .select(selectProjectRoles)
      .pipe(untilDestroyed(this))
      .subscribe((projectRoles) => {
        this.allRoles = [...projectRoles];
        this.cdRef.markForCheck();
      });

    this.store.dispatch(GetResponsibilitiesList());
    this.store
      .select(selectResponsibilities)
      .pipe(untilDestroyed(this))
      .subscribe((responsibilities) => {
        this.allResponsibilities = [...responsibilities];
        this.cdRef.markForCheck();
      });

    this.store.dispatch(GetSpecializationsList());
    this.store
      .select(selectSpecializations)
      .pipe(untilDestroyed(this))
      .subscribe((specializations) => {
        this.allSpecializations = [...specializations];
        this.cdRef.markForCheck();
      });
  }
}
