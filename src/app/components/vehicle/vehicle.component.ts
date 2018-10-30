import { Component, OnInit, Input } from '@angular/core';
import {ParkedVehicle} from 'src/app/entities/parkedVehicle';
import { ParkedVehicleService } from '../../services/parked-vehicle/parked-vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  //@Input() parkedVehicle: ParkedVehicle;
  @Input() parkedVehicle: ParkedVehicle = {
    typeVehicle: '',
    idVehicle: '',
    entryDate: '',
    exitDate: '',
    status: '',
    paidValue: 0,
    engineCapacity: 0
  };

  constructor(private vehicleService: ParkedVehicleService) { }

  ngOnInit() {
    
  }

  entryVehicle() {
    //if (!this.parkedVehicle.idVehicle || !this.parkedVehicle.typeVehicle) {return;}

    /*this.parkedVehicle.idVehicle = 'FEO';//idVehicle;
    this.parkedVehicle.typeVehicle = '';//typeVehicle;
    this.parkedVehicle.engineCapacity = 1;//engineCapacity;*/

    this.vehicleService.entryVehicle(this.parkedVehicle);
  }
}
