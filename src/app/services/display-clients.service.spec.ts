import { TestBed } from '@angular/core/testing';

import { DisplayClientsService } from './display-clients.service';

describe('DisplayClientsService', () => {
  let service: DisplayClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
