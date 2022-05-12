import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { BaseControl } from '../../classes/base-control.class';
import { IProject } from '../../interfaces/project.interface';

@Component({
  selector: 'app-autocomplete-form',
  templateUrl: './autocomplete-form.component.html',
  styleUrls: ['./autocomplete-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteFormComponent extends BaseControl implements OnInit {
  @Input() options: IProject[];
  @Output() option = new EventEmitter<IProject>();
  public item: IProject;
  filteredOptions: Observable<IProject[]>;

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
  }

  private _filter(name: string): IProject[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) => option.name.toLowerCase().includes(filterValue));
  }
}
