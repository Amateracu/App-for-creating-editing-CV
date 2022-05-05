import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
import { IRoles } from 'src/app/shared/interfaces/employees.interface';
import {
  IProject,
  IResponsibility,
  ISpecialization,
} from 'src/app/shared/interfaces/project.interface';
import { GetCvList } from 'src/app/store/employees/employees.actions';
import { selectCvList } from 'src/app/store/employees/employees.selectors';

@UntilDestroy()
@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvFormComponent implements OnInit {
  @Input() cvs: ICv[];
  public allSpecializations: ISpecialization[] = [];
  public allRoles: IRoles[] = [];
  public allResponsibilities: IResponsibility[] = [];
  public form: FormGroup;
  public userProjects: IProject[];
  public names: string[];
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private cdRef: ChangeDetectorRef,
  ) {}

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
    this.store.dispatch(GetCvList());
    this.store
      .select(selectCvList)
      .pipe(untilDestroyed(this))
      .subscribe((cvList) => {
        this.cvs = [...cvList];
        [...cvList].map((item) => (this.userProjects = item.projects));
        this.cdRef.markForCheck();
      });
    console.log(this.cvs);
    console.log(this.userProjects);
  }
  submit() {}
  cancel() {}
}
