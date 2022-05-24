import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
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
export class ProjectsFormComponent implements OnInit {
  @Input() userProjects: IProject[];
  @Input() useBtn: boolean = true;
  @Output() saveProject = new EventEmitter<IProject>();
  @Output() submitCv = new EventEmitter<void>();

  public allSpecializations: ISpecialization[] = [];
  public allRoles: IRoles[] = [];
  public allResponsibilities: IResponsibility[] = [];
  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private cdRef: ChangeDetectorRef,
  ) {}

  setFormProject(project: IProject) {
    this.form.patchValue({
      name: project.name,
      secondName: project.secondName,
      startDate: project.startDate,
      endDate: project.endDate,
      teamSize: project.teamSize,
      tasksPerformed: project.tasksPerformed,
      description: project.description,
      projectRoles: project.projectRoles,
      specializations: project.specializations,
      responsibilities: project.responsibilities,
    });
    this.saveProject.emit(project);
  }
  setFormProjectCv(projectCv: IProject) {
    this.form.patchValue({
      name: projectCv.name,
      secondName: projectCv.secondName,
      startDate: projectCv.startDate,
      endDate: projectCv.endDate,
      teamSize: projectCv.teamSize,
      tasksPerformed: projectCv.tasksPerformed,
      description: projectCv.description,
      projectRoles: projectCv.projectRoles,
      specializations: projectCv.specializations,
      responsibilities: projectCv.responsibilities,
    });
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
    this.submitCv.emit();
  }
  cancel() {
    this.form.reset();
  }
}
