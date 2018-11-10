import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateRangePickersModule } from 'projects/date-range-pickers/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DateRangePickersModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
