import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleListComponent } from './pole-list.component';

describe('PoleListComponent', () => {
  let component: PoleListComponent;
  let fixture: ComponentFixture<PoleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoleListComponent]
    });
    fixture = TestBed.createComponent(PoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
