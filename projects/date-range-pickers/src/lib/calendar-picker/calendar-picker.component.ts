import { Component } from '@angular/core';
import { DateRangePicker } from '../shared';

@Component({
  selector: 'drp-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.css']
})
export class CalendarPickerComponent extends DateRangePicker {}
