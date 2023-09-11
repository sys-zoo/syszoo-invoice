import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavTabComponent } from './main-nav-tab.component';

describe('MainNavTabComponent', () => {
  let component: MainNavTabComponent;
  let fixture: ComponentFixture<MainNavTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavTabComponent]
    });
    fixture = TestBed.createComponent(MainNavTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
