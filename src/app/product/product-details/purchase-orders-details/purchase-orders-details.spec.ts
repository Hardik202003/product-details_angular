import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrdersDetails } from './purchase-orders-details';

describe('PurchaseOrdersDetails', () => {
  let component: PurchaseOrdersDetails;
  let fixture: ComponentFixture<PurchaseOrdersDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseOrdersDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseOrdersDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
