import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { BaseControl } from '../../classes/base-control.class';

@Component({
  selector: 'app-autocomplete-form',
  templateUrl: './autocomplete-form.component.html',
  styleUrls: ['./autocomplete-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteFormComponent extends BaseControl implements OnInit {
  @Input() options: any[];
  @Output() option = new EventEmitter<any>();
  @Output() optionCv = new EventEmitter<any>();
  public item: any;
  filteredOptions: Observable<any[]>;

  override ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name: string) => (name ? this._filter(name) : this.options.slice())),
    );
  }

  selectOption(e: MatAutocompleteSelectedEvent) {
    const obj = e.option.value;

    this.option.emit(obj);
    this.optionCv.emit(obj);
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) => option.name.toLowerCase().includes(filterValue));
  }
}
