import { TestBed } from '@angular/core/testing';

import { DeviceInstallMaintenancesService } from './device-install-maintenances.service';

describe('DeviceInstallMaintenancesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeviceInstallMaintenancesService = TestBed.get(DeviceInstallMaintenancesService);
    expect(service).toBeTruthy();
  });
});
