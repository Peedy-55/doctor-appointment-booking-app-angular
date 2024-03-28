import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }

  registerClient(clientDetails:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8090/sign-up/client`, clientDetails)
  }

  registerDoctor(doctorDetails:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8090/sign-up/doctor`, doctorDetails)
  }
}
