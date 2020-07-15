import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTowerComponent } from './control-tower.component';

describe('ControlTowerComponent', () => {
  let component: ControlTowerComponent;
  let fixture: ComponentFixture<ControlTowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlTowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
