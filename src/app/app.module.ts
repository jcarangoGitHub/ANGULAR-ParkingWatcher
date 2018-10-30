import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { FormsModule } from '@angular/forms';
import { ListOfVehiclesParkedComponent } from './components/list-of-vehicles-parked/list-of-vehicles-parked.component';
import { MessagesComponent } from './components/messages/messages.component'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'fetchAll',
    component: ListOfVehiclesParkedComponent,
    data: { title: 'Vehicles list' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    ListOfVehiclesParkedComponent,
    MessagesComponent
  ],
  imports: [    
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
