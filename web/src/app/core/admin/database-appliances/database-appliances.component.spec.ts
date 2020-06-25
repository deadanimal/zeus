import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseAppliancesComponent } from './database-appliances.component';

describe('DatabaseAppliancesComponent', () => {
  let component: DatabaseAppliancesComponent;
  let fixture: ComponentFixture<DatabaseAppliancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseAppliancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
