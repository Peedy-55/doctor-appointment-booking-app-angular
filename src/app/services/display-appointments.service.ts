import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayAppointmentsService {

  constructor(private httpClient:HttpClient) { }

  displayAppointments(id:string,userType:string):Observable<any>{
    
    if(userType === 'client' || userType === 'doctor'){
      return this.httpClient.get(`http://localhost:8090/${userType}/all-appointments/${userType}ID=${id}`)
    }else{
      return this.httpClient.get(`http://localhost:8090/appointments`)
    }

    
  }
}
