import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessConfigurationComponent } from './buisness-configuration.component';

describe('BuisnessConfigurationComponent', () => {
  let component: BuisnessConfigurationComponent;
  let fixture: ComponentFixture<BuisnessConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuisnessConfigurationComponent]
    });
    fixture = TestBed.createComponent(BuisnessConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
