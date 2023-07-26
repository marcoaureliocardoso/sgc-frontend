import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleCreateComponent } from './pole-create.component';

describe('PoleCreateComponent', () => {
  let component: PoleCreateComponent;
  let fixture: ComponentFixture<PoleCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoleCreateComponent]
    });
    fixture = TestBed.createComponent(PoleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
