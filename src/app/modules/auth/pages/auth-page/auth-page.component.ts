import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { IAuth } from 'src/app/shared/interfaces/auth.interface';
import { AuthService } from 'src/app/shared/services/api/auth.service';
import { Auth, AuthSuccess } from 'src/app/store/auth/auth.actions';

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
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
