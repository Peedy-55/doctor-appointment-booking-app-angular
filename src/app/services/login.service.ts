import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

 
  loginUser(userCredentials:any): Observable<any> {
    // const userItem = localStorage.getItem("user"); // Store the result in a variable
    // let retrievedUser: any
    // if (userItem !== null) { // Check the variable against null
    //   retrievedUser = JSON.parse(userItem); // Now TypeScript knows userItem is a string
    //   console.log(retrievedUser.role);
    // }
    // console.log(userCredentials)
    // console.log({email: userCredentials.email, password: userCredentials.password})
    return this.httpClient.post(`http://localhost:8090/login/${userCredentials.type}`,{email: userCredentials.email, password: userCredentials.password})}
  }


