import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseControl } from '../../classes/base-control.class';
import { Small } from '../../enums/small.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends BaseControl {
  @Input() public type: string = 'text';
  public required: Small = Small.required;
}
