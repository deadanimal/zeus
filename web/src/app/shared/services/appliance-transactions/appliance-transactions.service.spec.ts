import { TestBed } from '@angular/core/testing';

import { ApplianceTransactionsService } from './appliance-transactions.service';

describe('ApplianceTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplianceTransactionsService = TestBed.get(ApplianceTransactionsService);
    expect(service).toBeTruthy();
  });
});
