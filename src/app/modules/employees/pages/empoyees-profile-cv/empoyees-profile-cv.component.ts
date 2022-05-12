import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { EMPLOYEES_PARAM, EMPLOYEES_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { IProject } from 'src/app/shared/interfaces/project.interface';
import { EditCvProject, GetCvList } from 'src/app/store/employees/employees.actions';
import { selectCvList } from 'src/app/store/employees/employees.selectors';
@UntilDestroy()
@Component({
  selector: 'app-empoyees-profile-cv',
  templateUrl: './empoyees-profile-cv.component.html',
  styleUrls: ['./empoyees-profile-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpoyeesProfileCvComponent implements OnInit {
  public isOpened: boolean = false;
  public addProj: boolean = false;
  public cvList: ICv[];
  public cvEdit: ICv;
  public userId: string;
  public projectsCv: IProject[];
  public useButton: false;
  public panelOpenState = false;
  public project: IProject;
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
          this.cvList = [...userCvs];
          [...userCvs].map((item) => (this.projectsCv = [...item.projects]));

          this.cdRef.markForCheck();
          console.log('projectsCv: ', this.projectsCv);
        });
    }
  }
  public clickedCv(index: number) {
    this.isOpened = !this.isOpened;
    this.projectsCv = this.cvList[index].projects;
    this.cvEdit = this.cvList[index];
  }
  public addProject() {
    this.addProj = !this.addProj;
  }
  public saveNewProject(project: IProject) {
    const cv: ICv = {
      ...this.cvEdit,
      projects: [...this.cvEdit.projects],
    };
    cv.projects.push(project);
    console.log(cv);
    this.store.dispatch(EditCvProject({ cv }));
  }
  public cancel() {
    this.router.navigate([EMPLOYEES_ROUTE.path]);
  }
}
