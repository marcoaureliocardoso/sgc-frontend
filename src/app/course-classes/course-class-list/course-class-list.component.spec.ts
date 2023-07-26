import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClassListComponent } from './course-class-list.component';

describe('CourseClassListComponent', () => {
  let component: CourseClassListComponent;
  let fixture: ComponentFixture<CourseClassListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseClassListComponent]
    });
    fixture = TestBed.createComponent(CourseClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
