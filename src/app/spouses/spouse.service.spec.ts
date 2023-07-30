import { TestBed } from '@angular/core/testing';

import { SpouseService } from './spouse.service';

describe('SpousesService', () => {
  let service: SpouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
