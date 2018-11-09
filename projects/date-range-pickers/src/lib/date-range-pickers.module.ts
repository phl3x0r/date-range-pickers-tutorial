import { NgModule } from '@angular/core';
import { DateRangePickersComponent } from './date-range-pickers.component';
import { SliderPickerComponent } from './slider-picker/slider-picker.component';
import { CalendarPickerComponent } from './calendar-picker/calendar-picker.component';

@NgModule({
  declarations: [
    DateRangePickersComponent,
    CalendarPickerComponent,
    SliderPickerComponent
  ],
  imports: [],
  exports: [DateRangePickersComponent],
  entryComponents: [CalendarPickerComponent, SliderPickerComponent]
})
export class DateRangePickersModule {}
