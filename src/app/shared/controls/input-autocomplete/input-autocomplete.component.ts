import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map } from 'rxjs';
import { BaseControl } from '../../classes/base-control.class';
import { IOptions } from '../../interfaces/option.interface';

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputAutocompleteComponent extends BaseControl implements OnInit, OnChanges {
  @Input() public title: string;
  @Input() public options: IOptions[] = [];

  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public filteredOptions: IOptions[];
  public chips: IOptions[] = [];

  constructor(private autoComleteControl: NgControl, private cdr: ChangeDetectorRef) {
    super(autoComleteControl, cdr);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && changes['options'].currentValue) {
      this.filteredOptions = this.options;
      this.cdr.markForCheck();
    }
  }

  override ngOnInit(): void {
    this.control.valueChanges
      .pipe(map((value: string) => (value ? this.filter(value) : this.options.slice())))
      .subscribe((chips) => {
        this.filteredOptions = chips;
        this.cdr.markForCheck();
      });
  }

  public remove(value: IOptions): void {
    const index = this.chips.indexOf(value);
    if (index !== -1) {
      this.chips.splice(index, 1);
      this.cvaOnChange(this.chips);
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    this.chips.push(event.option.value);
    this.control.setValue('');
    this.cvaOnChange(this.chips);
  }

  override writeValue(selectedChips: IOptions[]): void {
    this.chips = selectedChips;
    this.cdr.markForCheck();
  }

  private filter(value: string): IOptions[] {
    if (typeof value !== 'string') return this.options;
    return this.options.filter((chip) => chip.name.toLowerCase().includes(value.toLowerCase()));
  }
}
