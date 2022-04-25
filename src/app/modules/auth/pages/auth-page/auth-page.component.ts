import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { PROJECTS_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { IAuth } from 'src/app/shared/interfaces/auth.interface';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { Auth } from 'src/app/store/auth/auth.actions';
import { selectAuthData } from 'src/app/store/auth/auth.selectors';

@UntilDestroy()
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent implements OnInit {
  public form!: FormGroup;
  public submitted = false;
  public message!: string;
  public checked = false;
  public control!: string;
  constructor(
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    this.translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [''],
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const auth: IAuth = {
      email: this.form.value.username,
      password: this.form.value.password,
    };
    this.store.dispatch(Auth({ auth }));
    this.store
      .select(selectAuthData)
      .pipe(
        filter((data) => Boolean(data)),
        untilDestroyed(this),
      )
      .subscribe(() => {
        this.router.navigate([PROJECTS_ROUTE.path]);
      });
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
