import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfVehiclesParkedComponent } from './list-of-vehicles-parked.component';

describe('ListOfVehiclesParkedComponent', () => {
  let component: ListOfVehiclesParkedComponent;
  let fixture: ComponentFixture<ListOfVehiclesParkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfVehiclesParkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfVehiclesParkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
