import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    userType: string="client"
    email: string=""
    password: string=""
    businessLogicError:string=""
    successMessage:string=""
    data:any
    constructor(private loginService: LoginService,private router:Router) { }


    displayCredentials(){
      let userCredentials = { email:this.email, password: this.password,type:this.userType};
      
      this.loginService.loginUser(userCredentials).subscribe(
        {
          next: (data) => {
            // console.log(data);
            this.data = data;
            this.businessLogicError=""
            this.successMessage="Successfully Logged In!"
            localStorage.setItem("user", JSON.stringify({id:data.id,name:data.name,type:this.userType,email:data.email,password:data.password}));
            localStorage.setItem("loggedIn","true")
          },
          error: (err) => {
            if(typeof(err.error)==="string"){
              this.businessLogicError=err.error
            }
            this.successMessage=""
            console.log(err);
          }
        }
      )
    }

}
