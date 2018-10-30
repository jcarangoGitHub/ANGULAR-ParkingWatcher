import { Component, OnInit } from '@angular/core';
import { ParkedVehicleService } from '../../services/parked-vehicle/parked-vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTPARKED } from '../../mocks/mock-parkedVehicles';
import { ParkedVehicle } from 'src/app/entities/parkedVehicle';

@Component({
  selector: 'app-list-of-vehicles-parked',
  templateUrl: './list-of-vehicles-parked.component.html',
  styleUrls: ['./list-of-vehicles-parked.component.css']
})
export class ListOfVehiclesParkedComponent implements OnInit {

  vehiclesParked: any = [];
  myText: string;

  constructor(private vehicleService: ParkedVehicleService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    this.getAllVehiclesParked();
  }

  getAllVehiclesParked() {
    this.vehiclesParked = [];
    this.vehicleService.getAllVehiclesParked().subscribe((data: {}) => {
      console.log(data);
      this.vehiclesParked = data;      
    });

    /*this.vehicleService.getAllVehiclesParked()
    .subscribe(vehicles => this.vehiclesParked = vehicles);*/
    this.myText = this.vehiclesParked.length;
  }
}
