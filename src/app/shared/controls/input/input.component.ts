import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseControl } from '../../classes/base-control.class';
import { Small } from '../../enums/small.enum';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends BaseControl {
  public required = Small.required;
}
