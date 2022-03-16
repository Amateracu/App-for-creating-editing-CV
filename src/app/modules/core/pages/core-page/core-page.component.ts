import { Input } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorePageComponent {
  public isToogle = false;
  public toogle() {
    this.isToogle = !this.isToogle;
  }
  constructor() {}
}
