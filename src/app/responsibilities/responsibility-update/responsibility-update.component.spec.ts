import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityUpdateComponent } from './responsibility-update.component';

describe('ResponsibilityUpdateComponent', () => {
  let component: ResponsibilityUpdateComponent;
  let fixture: ComponentFixture<ResponsibilityUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsibilityUpdateComponent]
    });
    fixture = TestBed.createComponent(ResponsibilityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
