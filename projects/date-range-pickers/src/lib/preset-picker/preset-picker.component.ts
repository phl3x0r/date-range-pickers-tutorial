import { Component } from '@angular/core';
import { DateRangePicker, DateRange } from '../shared';

@Component({
  selector: 'drp-preset-picker',
  templateUrl: './preset-picker.component.html',
  styleUrls: ['./preset-picker.component.css']
})
export class PresetPickerComponent extends DateRangePicker {
  presets: Preset[] = [
    {
      label: 'Year until now',
      range: {
        fromDate: new Date(new Date().getFullYear(), 0, 1),
        toDate: new Date()
      }
    },
    {
      label: '1 year back',
      range: {
        fromDate: new Date(
          new Date().getFullYear() - 1,
          new Date().getMonth(),
          new Date().getDate()
        ),
        toDate: new Date()
      }
    },
    {
      label: 'Now until New Year',
      range: {
        fromDate: new Date(),
        toDate: new Date(new Date().getFullYear() + 1, 0, 1)
      }
    }
  ];
}

interface Preset {
  label: string;
  range: DateRange;
}
