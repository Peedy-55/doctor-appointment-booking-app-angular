import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteDoctorService {

  constructor(private httpClient:HttpClient) { }

  deleteDoctor(id?:number):Observable<any> {
      return this.httpClient.delete(`http://localhost:8090/deactivate/doctor/doctor-id=${id}`)
  }
}
