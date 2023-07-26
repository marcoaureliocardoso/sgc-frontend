import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondUpdateComponent } from './bond-update.component';

describe('BondUpdateComponent', () => {
  let component: BondUpdateComponent;
  let fixture: ComponentFixture<BondUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BondUpdateComponent]
    });
    fixture = TestBed.createComponent(BondUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
