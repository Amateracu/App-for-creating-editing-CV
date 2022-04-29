import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AUTH_ROUTE } from 'src/app/shared/constants/routing-path.const';
import { AuthService } from 'src/app/shared/services/api/auth.service';

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
  constructor(
    private translate: TranslateService,
    private router: Router,
    private authService: AuthService,
  ) {
    this.translate.setDefaultLang('en');
  }
  public changeLang(lang: string) {
    this.translate.use(lang);
  }
  public logout() {
    this.authService.logout();
    this.router.navigate([AUTH_ROUTE.path]);
  }
}
