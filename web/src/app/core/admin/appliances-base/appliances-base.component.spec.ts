import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancesBaseComponent } from './appliances-base.component';

describe('AppliancesBaseComponent', () => {
  let component: AppliancesBaseComponent;
  let fixture: ComponentFixture<AppliancesBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancesBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancesBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
