import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantCreateComponent } from './applicant-create.component';

describe('ApplicantCreateComponent', () => {
  let component: ApplicantCreateComponent;
  let fixture: ComponentFixture<ApplicantCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicantCreateComponent]
    });
    fixture = TestBed.createComponent(ApplicantCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
