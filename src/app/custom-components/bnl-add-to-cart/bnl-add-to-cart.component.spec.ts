import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnlAddToCartComponent } from './bnl-add-to-cart.component';

describe('BnlAddToCartComponent', () => {
  let component: BnlAddToCartComponent;
  let fixture: ComponentFixture<BnlAddToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnlAddToCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BnlAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
