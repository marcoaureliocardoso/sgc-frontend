import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleUpdateComponent } from './pole-update.component';

describe('PoleUpdateComponent', () => {
  let component: PoleUpdateComponent;
  let fixture: ComponentFixture<PoleUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoleUpdateComponent]
    });
    fixture = TestBed.createComponent(PoleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
