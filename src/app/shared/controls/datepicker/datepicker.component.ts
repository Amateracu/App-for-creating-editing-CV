import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseControl } from '../../classes/base-control.class';
import { Small } from '../../enums/small.enum';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent extends BaseControl {
  public required: Small = Small.required;
}
