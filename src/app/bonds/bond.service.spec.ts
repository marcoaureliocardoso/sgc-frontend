import { TestBed } from '@angular/core/testing';

import { BondService } from './bond.service';

describe('BondsService', () => {
  let service: BondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
