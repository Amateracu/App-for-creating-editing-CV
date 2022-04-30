import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { InputSelectComponent } from './input-select.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [InputSelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslateModule,
    HttpClientModule,
    MatAutocompleteModule,
    TranslateModule,
    MatNativeDateModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
  ],
  exports: [InputSelectComponent],
})
export class InputSelectModule {}
