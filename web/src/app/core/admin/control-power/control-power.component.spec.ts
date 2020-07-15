import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPowerComponent } from './control-power.component';

describe('ControlPowerComponent', () => {
  let component: ControlPowerComponent;
  let fixture: ComponentFixture<ControlPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
