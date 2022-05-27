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
import { cloneDeep } from 'lodash';
import { filter } from 'rxjs';
import { ProjectFormComponent } from 'src/app/modules/projects/components/project-form/project-form.component';
import { EMPLOYEES_PARAM, EMPLOYEES_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IaddCv, ICv } from 'src/app/shared/interfaces/cv.interface';
import { ILanguages } from 'src/app/shared/interfaces/employees.interface';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { IEducation, IGeneral, IVirtualCv } from 'src/app/shared/interfaces/virtual-cv.interface';
import {
  AddCv,
  DeleteVirtualCv,
  EditCvProject,
  GetCvList,
  GetCvUserList,
} from 'src/app/store/employees/employees.actions';
import { selectCvList, selectCvUserList } from 'src/app/store/employees/employees.selectors';
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
  @ViewChild(LanguagesFormComponent) public languageForm: LanguagesFormComponent;
  @ViewChild('projectEditForm') public cvForm: ProjectFormComponent;
  @ViewChild(EducationFormComponent) public educationForm: EducationFormComponent;
  @ViewChild(GeneralFormComponent) public generalForm: GeneralFormComponent;

  public addProj: boolean = false;
  public panelOpenState: boolean = false;
  public useButton: boolean = false;
  public userId: string;
  public selectedCvIndex: number = 0;
  public cvList: IVirtualCv[];
  public cvEdit: IVirtualCv;
  public allProjects: IProject[];
  public projectsVirtialCv: IProject[];
  public languages: ILanguages[];
  public education: IEducation;
  public general: IGeneral;
  public cvOrigin: ICv;
  public cvUser: IaddCv;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.userId = this.route.snapshot.params[EMPLOYEES_PARAM];
    this.store.dispatch(GetCvUserList({ userId: this.userId }));
    if (this.userId) {
      this.store.dispatch(GetCvList({ userId: this.userId }));
      this.store
        .select(selectCvList)
        .pipe(
          untilDestroyed(this),
          filter((cv) => Boolean(cv && cv.length)),
        )
        .subscribe((userCvs) => {
          this.cvList = cloneDeep(userCvs);
          this.clickedCv(this.selectedCvIndex);
          this.cdRef.markForCheck();
        });
    }
  }

  public clickedCv(index: number): void {
    this.selectedCvIndex = index;
    this.projectsVirtialCv = this.cvList[index].data.projects;
    this.languages = this.cvList[index].data.foreignLanguage;
    this.education = this.cvList[index].data.education;
    this.general = this.cvList[index].data.general;
    this.cvEdit = this.cvList[index];
  }

  public addProject(): void {
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

  public saveNewProject(project: IProject): void {
    this.cvEdit = {
      ...this.cvEdit,
      data: { ...this.cvEdit.data, projects: [...this.cvEdit.data.projects, project] },
    };
  }

  public submit(): void {
    this.store.dispatch(EditCvProject({ cv: this.cvEdit }));
  }

  public submitCv(): void {
    const projectEdit = this.cvForm.form.getRawValue() as IProject;
    const newProjectList = this.cvEdit.data.projects.filter((item) => item.id === projectEdit.id);
    newProjectList.push(projectEdit);
    const virtualCv: IVirtualCv = {
      ...this.cvEdit,
      data: {
        ...this.cvEdit.data,
        general: this.generalForm.form.getRawValue(),
        education: this.educationForm.form.getRawValue(),
        projects: newProjectList,
      },
    };
    this.store.dispatch(EditCvProject({ cv: virtualCv }));
  }

  public addNewCv(): void {
    this.store
      .select(selectCvUserList)
      .pipe(
        untilDestroyed(this),
        filter((cv) => Boolean(cv)),
      )
      .subscribe((cv) => {
        this.cvOrigin = cloneDeep(cv);
        this.cvUser = {
          cvId: this.cvOrigin.id,
          userId: this.userId,
        };
        this.cdRef.markForCheck();
      });
    this.store.dispatch(AddCv({ addCv: this.cvUser }));
  }

  public deleteCv(index: number): void {
    const cvToDelete = this.cvList[index].id;
    this.store.dispatch(DeleteVirtualCv({ id: cvToDelete }));
  }

  public cancel(): void {
    this.router.navigate([EMPLOYEES_ROUTE.path]);
  }
}
