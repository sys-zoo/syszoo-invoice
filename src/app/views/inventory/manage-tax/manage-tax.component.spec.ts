import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTaxComponent } from './manage-tax.component';

describe('ManageTaxComponent', () => {
  let component: ManageTaxComponent;
  let fixture: ComponentFixture<ManageTaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTaxComponent]
    });
    fixture = TestBed.createComponent(ManageTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
