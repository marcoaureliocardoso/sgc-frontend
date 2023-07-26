import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClassComponent } from './course-class.component';

describe('CourseClassComponent', () => {
  let component: CourseClassComponent;
  let fixture: ComponentFixture<CourseClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseClassComponent]
    });
    fixture = TestBed.createComponent(CourseClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
