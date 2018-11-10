import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from './date-range-picker.component';
import { PresetPickerComponent } from './preset-picker/preset-picker.component';
import { CalendarPickerComponent } from './calendar-picker/calendar-picker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    DateRangePickerComponent,
    CalendarPickerComponent,
    PresetPickerComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatTabsModule,
    MatButtonModule,
    MatRadioModule,
    MatListModule,
    MatCardModule,
    MatNativeDateModule
  ],
  exports: [DateRangePickerComponent],
  entryComponents: [CalendarPickerComponent, PresetPickerComponent]
})
export class DateRangePickersModule {}
