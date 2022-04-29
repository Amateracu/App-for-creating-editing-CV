import { ChangeDetectorRef, DoCheck, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { Directive } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Directive()
export class BaseControl implements OnInit, DoCheck, ControlValueAccessor {
  constructor(private ngControl: NgControl, private readonly cdRef: ChangeDetectorRef) {
    this.ngControl.valueAccessor = this;
    if (this.ngControl.control?.parent) {
      this.control.setParent(this.ngControl.control?.parent);
    }
  }

  @Input() public label!: string;

  public control: FormControl = new FormControl();

  public ngOnInit(): void {
    this.initErrors();
    this.initControlValueChanges();
  }
  public ngDoCheck(): void {
    if (this.ngControl.control?.errors !== this.control.errors) {
      this.initErrors();
    }
    if (this.ngControl.control?.touched) {
      this.control.markAsTouched();
      this.cdRef.markForCheck();
    } else {
      this.control.markAsPristine();
    }
  }

  public writeValue(value: any): void {
    this.control.setValue(value, { emitEvent: false });
    this.cdRef.detectChanges();
  }

  public registerOnChange(fn: any): void {
    this.cvaOnChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.cvaOnTouched = fn;
  }

  public cvaOnTouched: () => void = () => {};

  public onChange: any = () => {};

  public onTouch: any = () => {};

  protected initErrors(): void {
    this.control.setErrors(this.ngControl.control!.errors);
  }
  protected cvaOnChange: (value: any) => void = () => {};

  protected initControlValueChanges(): void {
    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      this.cvaOnChange(value);
    });
  }
}
