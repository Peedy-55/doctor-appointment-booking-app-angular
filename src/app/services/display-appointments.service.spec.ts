import { TestBed } from '@angular/core/testing';

import { DisplayAppointmentsService } from './display-appointments.service';

describe('DisplayAppointmentsService', () => {
  let service: DisplayAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
