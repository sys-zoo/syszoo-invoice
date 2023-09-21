import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillinghistoryComponent } from './billinghistory.component';

describe('BillinghistoryComponent', () => {
  let component: BillinghistoryComponent;
  let fixture: ComponentFixture<BillinghistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillinghistoryComponent]
    });
    fixture = TestBed.createComponent(BillinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
