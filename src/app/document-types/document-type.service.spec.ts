import { TestBed } from '@angular/core/testing';

import { DocumentTypeService } from './document-type.service';

describe('DocumentTypesService', () => {
  let service: DocumentTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
