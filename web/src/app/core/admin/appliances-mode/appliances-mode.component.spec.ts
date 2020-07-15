import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancesModeComponent } from './appliances-mode.component';

describe('AppliancesModeComponent', () => {
  let component: AppliancesModeComponent;
  let fixture: ComponentFixture<AppliancesModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancesModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancesModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
