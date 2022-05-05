import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';
import { BaseControl } from '../../classes/base-control.class';

@Component({
  selector: 'app-autocomplete-form',
  templateUrl: './autocomplete-form.component.html',
  styleUrls: ['./autocomplete-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteFormComponent extends BaseControl implements OnInit {
  @Input() options: string[] = [];
  filteredOptions: Observable<string[]>;

  override ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }
}
