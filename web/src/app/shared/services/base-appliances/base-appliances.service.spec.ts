import { TestBed } from '@angular/core/testing';

import { BaseAppliancesService } from './base-appliances.service';

describe('BaseAppliancesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseAppliancesService = TestBed.get(BaseAppliancesService);
    expect(service).toBeTruthy();
  });
});
