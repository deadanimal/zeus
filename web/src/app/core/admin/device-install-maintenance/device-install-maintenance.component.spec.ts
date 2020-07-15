import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceInstallMaintenanceComponent } from './device-install-maintenance.component';

describe('DeviceInstallMaintenanceComponent', () => {
  let component: DeviceInstallMaintenanceComponent;
  let fixture: ComponentFixture<DeviceInstallMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceInstallMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceInstallMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
