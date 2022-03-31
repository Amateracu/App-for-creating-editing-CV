import { Input, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IColumn } from './interfaces/column.interface';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseTableComponent implements OnInit, OnChanges {
  @Input() data!: any[];
  @Input() columns!: IColumn[];

  @Output() clickedRow = new EventEmitter<any>();

  public columnsDef!: string[];

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns'] && changes['columns'].currentValue) {
      this.columnsDef = this.columns.map(({ fieldName }) => fieldName);
    }
  }

  public ngOnInit(): void {}

  public rowClick(row: any): void {
    this.clickedRow.emit(row);
  }
}
