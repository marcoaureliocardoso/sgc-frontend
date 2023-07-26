import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondCreateComponent } from './bond-create.component';

describe('BondCreateComponent', () => {
  let component: BondCreateComponent;
  let fixture: ComponentFixture<BondCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BondCreateComponent]
    });
    fixture = TestBed.createComponent(BondCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
