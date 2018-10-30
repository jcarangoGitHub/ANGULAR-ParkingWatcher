import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ParkedVehicle } from 'src/app/entities/parkedVehicle';
import { LISTPARKED } from '../../mocks/mock-parkedVehicles';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8081/fetchAll';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json' 
  })
};

@Injectable({
  providedIn: 'root'
})

export class ParkedVehicleService {
  private entryUrl = 'http://localhost:8081/entryVehicle';
  private params: string;

  constructor(private http: HttpClient, 
              private messageService: MessageService) { }

  getAllVehiclesParked(): Observable<ParkedVehicle[]>{
    this.messageService.add('PARKED VEHICLE SERVICE: fetched heroes');
    //return this.http.get(endpoint).pipe(map(this.extractData));
    
    return this.http.get<ParkedVehicle[]>(endpoint);
      /*.pipe(
        tap(vehicles => this.log('fetched vehicles')),
        catchError(this.handleError('getAllVehiclesParked', [])));*/
    //return of(LISTPARKED);  
  }

  entryVehicle(parkedVehicle: ParkedVehicle): Observable<ParkedVehicle> {    
    this.params = "typeVehicle=" + parkedVehicle.typeVehicle + "&idVehicle=" + parkedVehicle.idVehicle + 
      "&CC=" + parkedVehicle.engineCapacity;
    return this.http.post<ParkedVehicle>(this.entryUrl, this.params, httpOptions).pipe(
      tap((parkedVehicle: ParkedVehicle) => this.log('added vehicle w/ id={parkedVehicle.idVehicle}')),
      catchError(this.handleError<ParkedVehicle>('entryVehicle'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('VehicleService: ${message}');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
