import { TestBed } from '@angular/core/testing';

import { ApplianceModesService } from './appliance-modes.service';

describe('ApplianceModesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplianceModesService = TestBed.get(ApplianceModesService);
    expect(service).toBeTruthy();
  });
});
