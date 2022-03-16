import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
