import { TestBed } from '@angular/core/testing';

import { ParkedVehicleService } from './parked-vehicle.service';

describe('ParkedVehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkedVehicleService = TestBed.get(ParkedVehicleService);
    expect(service).toBeTruthy();
  });
});
