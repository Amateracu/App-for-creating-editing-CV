import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { EMPLOYEES_PARAM, EMPLOYEES_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { ICv } from 'src/app/shared/interfaces/cv.interface';
@UntilDestroy()
@Component({
  selector: 'app-empoyees-profile-cv',
  templateUrl: './empoyees-profile-cv.component.html',
  styleUrls: ['./empoyees-profile-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpoyeesProfileCvComponent implements OnInit {
  public isOpened: boolean = false;
  public cvList: ICv[];
  public userName: string;
  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.userName = this.route.snapshot.params[EMPLOYEES_PARAM];
  }
  openedCv() {
    this.isOpened = !this.isOpened;
  }
  cancel() {
    this.router.navigate([EMPLOYEES_ROUTE.path]);
  }
}
