import { Input } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorePageComponent {
  public isToogle!: boolean;
  public toogle() {
    this.isToogle = !this.isToogle;
  }
  public openBottomSheet!: boolean;
  public opened() {
    this.openBottomSheet = !this.openBottomSheet;
  }
  constructor() {}
}
