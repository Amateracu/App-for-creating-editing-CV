import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTableComponent } from './base-table.component';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BaseTableComponent],

  imports: [CommonModule, MatTableModule, TranslateModule],
  exports: [BaseTableComponent],
})
export class BaseTableModule {}
