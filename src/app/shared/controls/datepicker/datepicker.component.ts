import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseControl } from '../../classes/base-control.class';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent extends BaseControl {}
