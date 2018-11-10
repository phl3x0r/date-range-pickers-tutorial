import { DateRange } from './date-range.interface';
import { Input, Output, EventEmitter } from '@angular/core';

export abstract class DateRangePicker {
  @Input()
  selected: DateRange;
  @Output()
  selectedChange = new EventEmitter<DateRange>();
}
