import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { ProjectFormComponent } from 'src/app/modules/projects/components/project-form/project-form.component';
import { EMPLOYEES_PARAM, EMPLOYEES_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { ILanguages } from 'src/app/shared/interfaces/employees.interface';
import {
  IProject,
  IProjectRoles,
  IResponsibility,
  ISpecialization,
} from 'src/app/shared/interfaces/project.interface';
import { IEducation, IGeneral, IVirtualCv } from 'src/app/shared/interfaces/virtual-cv.interface';
import { EditCvProject, GetCvList } from 'src/app/store/employees/employees.actions';
import { selectCvList } from 'src/app/store/employees/employees.selectors';
import { GetProjectsList } from 'src/app/store/projects/projects.actions';
import { selectProjects } from 'src/app/store/projects/projects.selectors';
import { EducationFormComponent } from '../../components/education-form/education-form.component';
import { GeneralFormComponent } from '../../components/general-form/general-form.component';
import { LanguagesFormComponent } from '../../components/languages-form/languages-form.component';
@UntilDestroy()
@Component({
  selector: 'app-empoyees-profile-cv',
  templateUrl: './empoyees-profile-cv.component.html',
  styleUrls: ['./empoyees-profile-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpoyeesProfileCvComponent implements OnInit {
  @ViewChild(LanguagesFormComponent) languageForm: LanguagesFormComponent;
  @ViewChild(ProjectFormComponent) cvForm: ProjectFormComponent;
  @ViewChild(EducationFormComponent) educationForm: EducationFormComponent;
  @ViewChild(GeneralFormComponent) generalForm: GeneralFormComponent;

  public isOpened: boolean = false;
  public addProj: boolean = false;
  public panelOpenState = false;
  public useButton: boolean = false;
  public showBtn: boolean = true;
  public userId: string;
  public specializationCv: ISpecialization[];
  public projectRolesCv: IProjectRoles[];
  public responsibilityCv: IResponsibility[];
  public cvList: IVirtualCv[];
  public cvSave: IVirtualCv;
  public cvEdit: IVirtualCv;
  public allProjects: IProject[];
  public projectsCv: IProject[];
  public projectVirtialCv: IProject[];
  public project: IProject;
  public languages: ILanguages[];
  public education: IEducation;
  public general: IGeneral;
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.userId = this.route.snapshot.params[EMPLOYEES_PARAM];
    if (this.userId) {
      this.store.dispatch(GetCvList({ userId: this.userId }));
      this.store
        .select(selectCvList)
        .pipe(
          untilDestroyed(this),
          filter((cv) => Boolean(cv)),
        )
        .subscribe((userCvs) => {
          this.cvList = [...userCvs].map((item) => ({ ...item }));
          [...userCvs].map((item) => (this.projectVirtialCv = [...item.data.projects]));
          [...userCvs].map((item) => (this.languages = [...item.data.foreignLanguage]));

          this.cdRef.markForCheck();
        });
    }
  }
  public clickedCv(index: number) {
    this.isOpened = !this.isOpened;
    this.projectVirtialCv = this.cvList[index].data.projects;
    this.languages = this.cvList[index].data.foreignLanguage;
    this.education = this.cvList[index].data.education;
    this.general = this.cvList[index].data.general;
    this.cvEdit = this.cvList[index];
  }
  public addProject() {
    this.addProj = !this.addProj;
    this.store.dispatch(GetProjectsList());
    this.store
      .select(selectProjects)
      .pipe(untilDestroyed(this))
      .subscribe((projects) => {
        this.allProjects = [...projects];
        this.cdRef.markForCheck();
      });
  }
  public saveNewProject(project: IProject) {
    this.cvSave = {
      ...this.cvEdit,
      data: { ...this.cvEdit.data, projects: [...this.cvEdit.data.projects, project] },
    };
  }
  public submit() {
    this.store.dispatch(EditCvProject({ cv: this.cvSave }));
  }
  public addNewCv() {
    const virtualCv = {
      ...this.cvSave,
      data: {
        ...this.cvSave.data,
        general: this.generalForm.form.getRawValue(),
        education: this.educationForm.form.getRawValue(),
        projects: this.cvForm.form.getRawValue(),
        languages: this.languageForm.form.getRawValue(),
      },
    };
    this.store.dispatch(EditCvProject({ cv: virtualCv }));
  }

  public cancel() {
    this.router.navigate([EMPLOYEES_ROUTE.path]);
  }
}
