import {ParkedVehicle} from '../entities/parkedVehicle';

export const LISTPARKED: ParkedVehicle[] = [
    {typeVehicle: 'C', idVehicle: 'HZM418', entryDate: '2018-10-29T14:12:00', exitDate: '', status: 'PARKED', 
        paidValue: 0, engineCapacity: 0},
    {typeVehicle: 'M', idVehicle: 'ABC987', entryDate: '2018-10-29T13:10:00', exitDate: '', status: 'PARKED', 
        paidValue: 0, engineCapacity: 550},
    {typeVehicle: 'C', idVehicle: 'ABC123', entryDate: '2018-10-29T12:09:00', exitDate: '', status: 'PARKED', 
        paidValue: 0, engineCapacity: 0},
    {typeVehicle: 'M', idVehicle: 'DEF123', entryDate: '2018-10-28T14:12:00', exitDate: '', status: 'PARKED', 
        paidValue: 0, engineCapacity: 500},
    {typeVehicle: 'C', idVehicle: 'KOP123', entryDate: '2018-10-28T14:12:00', exitDate: '2018-10-28T15:12:00', 
        status: 'PAID', paidValue: 1000, engineCapacity: 0}
];   