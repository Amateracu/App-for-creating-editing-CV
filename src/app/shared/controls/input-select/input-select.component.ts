import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseControl } from '../../classes/base-control.class';
import { ISelect } from '../../interfaces/employees.interface';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSelectComponent extends BaseControl {
  @Input() public title: string = '';
  @Input() public selects: ISelect[] = [];
}
