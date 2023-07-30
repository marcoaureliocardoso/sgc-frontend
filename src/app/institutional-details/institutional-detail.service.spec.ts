import { TestBed } from '@angular/core/testing';

import { InstitutionalDetailService } from './institutional-detail.service';

describe('InstitutionalDetailsService', () => {
  let service: InstitutionalDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutionalDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
