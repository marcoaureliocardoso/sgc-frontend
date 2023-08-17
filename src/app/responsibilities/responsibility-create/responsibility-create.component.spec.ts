import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityCreateComponent } from './responsibility-create.component';

describe('ResponsibilityCreateComponent', () => {
  let component: ResponsibilityCreateComponent;
  let fixture: ComponentFixture<ResponsibilityCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsibilityCreateComponent]
    });
    fixture = TestBed.createComponent(ResponsibilityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
