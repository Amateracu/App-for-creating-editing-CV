import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import jsPDF from 'jspdf';
import { cloneDeep } from 'lodash';
import { filter } from 'rxjs';
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
  GetVirtualCvList,
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
  @ViewChild(EducationFormComponent) public educationForm: EducationFormComponent;
  @ViewChild(GeneralFormComponent) public generalForm: GeneralFormComponent;
  @ViewChild('downloadPdf', { static: false }) el: ElementRef;
  public addProj: boolean = false;
  public useButton: boolean = false;
  public userId: string;
  public selectedCvIndex: number = 0;
  public selectedProject: IProject;
  public projectCv: IProject;
  public virtualCvList: IVirtualCv[];
  public currentVirtualCv: IVirtualCv;
  public allProjects: IProject[];
  public projects: IProject[];
  public languages: ILanguages[];
  public education: IEducation;
  public general: IGeneral;
  public cvOrigin: ICv;
  public addCv: IaddCv;
  public form: FormGroup;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
    });
  }

  public ngOnInit(): void {
    this.userId = this.route.snapshot.params[EMPLOYEES_PARAM];
    this.store.dispatch(GetCvList({ userId: this.userId }));
    if (this.userId) {
      this.store.dispatch(GetVirtualCvList({ userId: this.userId }));
      this.store
        .select(selectCvList)
        .pipe(
          untilDestroyed(this),
          filter((cv) => Boolean(cv && cv.length)),
        )
        .subscribe((userCvs) => {
          this.virtualCvList = cloneDeep(userCvs);
          this.clickedCv(this.selectedCvIndex);
          this.cdRef.markForCheck();
        });
    }
    this.store.dispatch(GetProjectsList());
    this.store
      .select(selectProjects)
      .pipe(untilDestroyed(this))
      .subscribe((projects) => {
        this.allProjects = cloneDeep(projects);
        this.cdRef.markForCheck();
      });
  }

  public clickedCv(index: number): void {
    this.selectedCvIndex = index;
    this.projects = this.virtualCvList[index].data.projects;
    this.languages = this.virtualCvList[index].data.foreignLanguage;
    this.education = this.virtualCvList[index].data.education;
    this.general = this.virtualCvList[index].data.general;
    this.currentVirtualCv = this.virtualCvList[index];
  }

  public selectProject(project: IProject): void {
    this.selectedProject = project;
    this.form.patchValue({
      name: project.name,
    });
  }

  public addProject(): void {
    this.currentVirtualCv.data.projects.push(this.selectedProject);
    this.store.dispatch(EditCvProject({ cv: this.currentVirtualCv }));
  }

  public open(index: number) {
    this.projectCv = this.projects[index];
  }

  public submitProject(project: IProject): void {
    this.currentVirtualCv.data.projects = this.currentVirtualCv.data.projects.map((item) => {
      if (item.id === project.id) {
        return { ...item, ...project, id: String(new Date()) };
      }
      return item;
    });
    this.store.dispatch(EditCvProject({ cv: this.currentVirtualCv }));
  }

  public submitCv(): void {
    const virtualCv: IVirtualCv = {
      ...this.currentVirtualCv,
      data: {
        ...this.currentVirtualCv.data,
        general: this.generalForm.form.getRawValue(),
        education: this.educationForm.form.getRawValue(),
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
        this.addCv = {
          cvId: this.cvOrigin.id,
          userId: this.userId,
        };
        this.store.dispatch(AddCv({ addCv: this.addCv }));
        this.cdRef.markForCheck();
      });
  }

  public downloadPDF() {
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html(this.el.nativeElement, {
      callback: (doc) => {
        doc.save('CV.pdf');
      },
    });
  }

  public deleteCv(index: number): void {
    const cvToDelete = this.virtualCvList[index].id;
    this.store.dispatch(DeleteVirtualCv({ id: cvToDelete }));
  }

  public cancel(): void {
    this.router.navigate([EMPLOYEES_ROUTE.path]);
  }
}
