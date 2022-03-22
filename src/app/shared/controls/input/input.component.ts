import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  constructor(public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
    if (this.ngControl.control?.parent) {
      this.control.setParent(this.ngControl.control?.parent);
    }
  }
  public control: FormControl = new FormControl();
  onChange: any = () => {};
  onTouch: any = () => {};
  input!: string;
  writeValue(input: string): void {
    this.input = input;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
