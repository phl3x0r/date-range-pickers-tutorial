import { TestBed } from '@angular/core/testing';

import { DateRangePickersService } from './date-range-pickers.service';

describe('DateRangePickersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateRangePickersService = TestBed.get(DateRangePickersService);
    expect(service).toBeTruthy();
  });
});
