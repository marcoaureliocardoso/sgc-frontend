import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClassCreateComponent } from './course-class-create.component';

describe('CourseClassCreateComponent', () => {
  let component: CourseClassCreateComponent;
  let fixture: ComponentFixture<CourseClassCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseClassCreateComponent]
    });
    fixture = TestBed.createComponent(CourseClassCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
