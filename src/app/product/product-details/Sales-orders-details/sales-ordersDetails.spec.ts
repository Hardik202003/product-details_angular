import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrdersDetails } from './sales-ordersDetails';

describe('SalesOrdersDetails', () => {
  let component: SalesOrdersDetails;
  let fixture: ComponentFixture<SalesOrdersDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesOrdersDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesOrdersDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
