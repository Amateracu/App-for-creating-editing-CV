import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { InputAutocompleteComponent } from './input-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [InputAutocompleteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslateModule,
    MatAutocompleteModule,
    TranslateModule,
  ],
  exports: [InputAutocompleteComponent],
})
export class InputAutocompleteModule {}
