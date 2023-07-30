import { TestBed } from '@angular/core/testing';

import { CourseClassService } from './course-class.service';

describe('CourseClassesService', () => {
  let service: CourseClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
