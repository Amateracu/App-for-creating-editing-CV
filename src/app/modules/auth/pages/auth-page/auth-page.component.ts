import { ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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
  constructor(private formBuilder: FormBuilder, private translate: TranslateService) {
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
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
