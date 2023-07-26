import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClassUpdateComponent } from './course-class-update.component';

describe('CourseClassUpdateComponent', () => {
  let component: CourseClassUpdateComponent;
  let fixture: ComponentFixture<CourseClassUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseClassUpdateComponent]
    });
    fixture = TestBed.createComponent(CourseClassUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
