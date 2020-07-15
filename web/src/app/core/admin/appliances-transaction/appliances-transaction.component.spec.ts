import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancesTransactionComponent } from './appliances-transaction.component';

describe('AppliancesTransactionComponent', () => {
  let component: AppliancesTransactionComponent;
  let fixture: ComponentFixture<AppliancesTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancesTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancesTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
