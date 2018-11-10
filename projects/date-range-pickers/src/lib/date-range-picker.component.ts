import { Component, OnInit, Input } from '@angular/core';
import { DateRangePicker } from './shared';

@Component({
  selector: 'drp-date-range-picker',
  templateUrl: './date-range-picker.component.html'
})
export class DateRangePickerComponent extends DateRangePicker {
  @Input()
  width = '350px';
}
