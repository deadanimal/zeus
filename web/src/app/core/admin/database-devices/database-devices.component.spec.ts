import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseDevicesComponent } from './database-devices.component';

describe('DatabaseDevicesComponent', () => {
  let component: DatabaseDevicesComponent;
  let fixture: ComponentFixture<DatabaseDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
