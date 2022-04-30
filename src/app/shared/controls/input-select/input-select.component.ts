import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BaseControl } from '../../classes/base-control.class';
import { ISelect } from '../../interfaces/employees.interface';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSelectComponent extends BaseControl implements OnInit {
  @Input() title: string = '';
  @Input() selects: ISelect[] = [];

  override ngOnInit(): void {}
}
