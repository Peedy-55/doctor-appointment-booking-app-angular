import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    userType: string="client"
    email: string=""
    password: string=""

    data:any
    constructor(private loginService: LoginService,private router:Router) { }


    displayCredentials(){
      let userCredentials = { email:this.email, password: this.password,role:this.userType};
      
      this.loginService.loginUser(userCredentials).subscribe(
        {
          next: (data) => {
            console.log(data);
            this.data = data;
            localStorage.setItem("user", JSON.stringify({id:data.id,name:data.name,type:this.userType}));
            localStorage.setItem("loggedIn","true")
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            console.log("Server completed sending data.");
  
          }
        }
      )
     
    //   const userItem = localStorage.getItem("user"); // Store the result in a variable
    //   if (userItem !== null) { // Check the variable against null
    //     const retrievedUser = JSON.parse(userItem); // Now TypeScript knows userItem is a string
    //     console.log(retrievedUser.role);
    // }
    }

}
