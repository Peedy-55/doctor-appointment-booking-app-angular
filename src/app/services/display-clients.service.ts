import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayClientsService {
  constructor(private httpClient:HttpClient) { }

  fetchClients():Observable<any>{
    return this.httpClient.get(`http://localhost:8090/clients`)
  }
}
