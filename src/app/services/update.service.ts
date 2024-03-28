import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private httpClient:HttpClient) { }

  updateAccount(user:Client|Doctor,userType:string):Observable<any>{
      return this.httpClient.put(`http://localhost:8090/update-account/${userType}`,user)
  }
}
