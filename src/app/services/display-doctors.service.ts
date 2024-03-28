import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayDoctorsService {
  

  constructor(private httpClient:HttpClient) { }

  fetchDoctors(searchType:string,searchInput:string):Observable<any>{
    console.log(searchType,searchInput)
    return this.httpClient.get(`http://localhost:8090/client/available-doctors`)
    // if(searchType==="" || searchInput===""){
      // return this.httpClient.get(`http://localhost:8090/client/available-doctors`)
    // }else if(searchType==='doctor-name'){
    //   return this.httpClient.get(`http://localhost:8090/client/available-doctors/doctor-name=${searchInput}`)
    // }else{
    //   return this.httpClient.get(`http://localhost:8090/client/available-doctors/specialization=${searchInput}`)
    // }
  
  }
}
