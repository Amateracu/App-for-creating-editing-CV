import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
