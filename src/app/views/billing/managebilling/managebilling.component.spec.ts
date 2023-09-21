import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebillingComponent } from './managebilling.component';

describe('ManagebillingComponent', () => {
  let component: ManagebillingComponent;
  let fixture: ComponentFixture<ManagebillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagebillingComponent]
    });
    fixture = TestBed.createComponent(ManagebillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
