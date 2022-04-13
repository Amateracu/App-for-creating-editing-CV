import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AUTH_ROUTE, PROJECTS_ROUTE } from 'src/app/shared/constants/routing-path.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() openedSideBar = new EventEmitter<boolean>();
  public opened() {
    this.openedSideBar.emit();
  }
  constructor(private translate: TranslateService, private router: Router) {
    this.translate.setDefaultLang('en');
  }
  public changeLang(lang: string) {
    this.translate.use(lang);
  }
  public logout() {
    this.router.navigate([AUTH_ROUTE.path]);
  }
}
