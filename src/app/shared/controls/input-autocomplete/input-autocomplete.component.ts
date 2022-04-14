import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseControl } from '../../classes/base-control.class';
import { Small } from '../../enums/small.enum';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputAutocompleteComponent extends BaseControl {
  public options: string[] = ['One', 'Two', 'Three'];
  public required = Small.required;
}
