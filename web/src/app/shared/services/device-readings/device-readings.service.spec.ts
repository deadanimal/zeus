import { TestBed } from '@angular/core/testing';

import { DeviceReadingsService } from './device-readings.service';

describe('DeviceReadingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceReadingsService = TestBed.get(DeviceReadingsService);
    expect(service).toBeTruthy();
  });
});
