import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  exports: [InputComponent],
})
export class InputModule {}
