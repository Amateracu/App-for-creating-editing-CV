import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { BaseControl } from '../../classes/base-control.class';
import { MatChipInputEvent } from '@angular/material/chips';
import { Input } from '@angular/core';
import { IChips } from '../../interfaces/project.interface';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputAutocompleteComponent extends BaseControl implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredChips: Observable<IChips[]>;
  @Input() title: string;
  @Input() chips: IChips[] = [];
  @Input() allchips: IChips[] = [];

  @ViewChild('chipsInput') chipsInput: ElementRef<HTMLInputElement>;

  override ngOnInit(): void {
    this.filteredChips = this.control.valueChanges.pipe(
      startWith(null),
      map((value: IChips | null) => (value.name ? this._filter(value) : this.allchips.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value: IChips = {
      name: (event.value || null).trim(),
    };
    if (value.name) {
      this.chips.map(({ name }) => name).push(value.name);
    }

    event.chipInput!.clear();

    this.control.setValue(null);
    this.cvaOnChange(this.chips);
  }

  remove(value: IChips): void {
    const index = this.chips.indexOf(value);

    if (index >= 0) {
      this.chips.splice(index, 1);
      this.cvaOnChange(this.chips);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.chips.push(event.option.value);
    this.chipsInput.nativeElement.value = null;
    this.control.setValue([]);
    this.cvaOnChange(this.chips);
  }

  private _filter(value: IChips): IChips[] {
    const filterValue = value.name;

    return this.allchips.filter((value) => value.name.includes(filterValue));
  }
}
