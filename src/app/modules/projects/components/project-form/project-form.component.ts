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
import {
  IProject,
  IProjectRoles,
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
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectFormComponent implements OnInit, OnChanges {
  @Output() public addProject = new EventEmitter<IProject>();
  @Output() public cancelProject = new EventEmitter<any>();
  @Input() public projectById: IProject;
  public form!: FormGroup;
  public allSpecializations: ISpecialization[] = [];
  public allRoles: IProjectRoles[] = [];
  public allResponsibilities: IResponsibility[] = [];

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
    if (changes['projectById'] && changes['projectById'].currentValue) {
      this.form.setValue({
        name: this.projectById.name,
        secondName: this.projectById.secondName,
        startDate: this.projectById.startDate,
        endDate: this.projectById.endDate,
        teamSize: this.projectById.teamSize,
        tasksPerformed: this.projectById.tasksPerformed,
        description: this.projectById.description,
        projectRoles: this.projectById.projectRoles,
        specializations: this.projectById.specializations,
        responsibilities: this.projectById.responsibilities,
      });
    }
  }

  public ngOnInit(): void {
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

  public submit(): void {
    const project: IProject = {
      ...this.form.getRawValue(),
      specializations: this.form
        .get('specializations')
        .value.map((item: ISpecialization) => item.id),
      projectRoles: this.form.get('projectRoles').value.map((item: IProjectRoles) => item.id),
      responsibilities: this.form
        .get('responsibilities')
        .value.map((item: IResponsibility) => item.id),
      teamSize: Number(this.form.get('teamSize').value),
    };
    this.addProject.emit(project);
    this.form.reset();
  }

  public cancel(): void {
    this.cancelProject.emit();
  }
}
