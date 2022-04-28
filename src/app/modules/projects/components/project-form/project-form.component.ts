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
import { PROJECT_INFO_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.const';
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
  @Output() addProject = new EventEmitter<IProject>();
  @Output() cancelProject = new EventEmitter<any>();
  @Input() projectById: IProject;
  public form!: FormGroup;
  public selectedSpecializations: ISpecialization[] = [];
  public allSpecializations: ISpecialization[] = [];
  public selectedRoles: IProjectRoles[] = [];
  public allRoles: IProjectRoles[] = [];
  public selectedResponsibilities: IResponsibility[] = [];
  public allResponsibilities: IResponsibility[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private cdRef: ChangeDetectorRef,
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
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
      this.selectedSpecializations = this.projectById.specializations;
      this.selectedRoles = this.projectById.projectRoles;
      this.selectedResponsibilities = this.projectById.responsibilities;
    }
  }
  ngOnInit(): void {
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
  submit() {
    const project: IProject = {
      ...this.form.getRawValue(),
      teamSize: Number(this.form.get('teamSize').value),
      specializations: this.selectedSpecializations.map((item) => item.id),
      projectRoles: this.selectedRoles.map((item) => item.id),
      responsibilities: this.selectedResponsibilities.map((item) => item.id),
    };
    this.addProject.emit(project);
    this.form.reset();
  }
  cancel() {
    this.cancelProject.emit();
  }
}
