import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookAppointmentService {

  constructor(private httpClient:HttpClient) { }

  bookAppointment(appointment: Appointment):Observable<any>{
    return this.httpClient.post(`http://localhost:8090/client/new-appointment`, appointment)
  }
}
