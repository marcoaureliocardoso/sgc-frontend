import { TestBed } from '@angular/core/testing';

import { QualificationService } from './qualification.service';

describe('QualificationsService', () => {
  let service: QualificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
