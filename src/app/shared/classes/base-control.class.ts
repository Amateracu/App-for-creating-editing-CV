import { ChangeDetectorRef, DoCheck } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Directive } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Directive()
export class BaseControl implements OnInit, DoCheck, ControlValueAccessor {
  constructor(public ngControl: NgControl, private readonly cdRef: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
    if (this.ngControl.control?.parent) {
      this.control.setParent(this.ngControl.control?.parent);
    }
  }

  @Input() public label!: string;

  public control: FormControl = new FormControl();

  public ngOnInit(): void {
    this.initErrors();
  }
  public ngDoCheck(): void {
    if (this.ngControl.control?.errors !== this.control.errors) {
      this.initErrors();
    }
    if (this.ngControl.control?.dirty) {
      this.control.markAsDirty();
      this.cdRef.markForCheck();
    } else {
      this.control.markAsPristine();
    }
  }

  public writeValue(value: string): void {
    this.control.setValue(value, { emitEvent: false });
    this.cdRef.detectChanges();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public cvaOnTouched: () => void = () => {};

  public onChange: any = () => {};

  public onTouch: any = () => {};

  protected initErrors(): void {
    this.control.setErrors(this.ngControl.control!.errors);
  }
  protected cvaOnChange: (value: any) => void = () => {};
}
