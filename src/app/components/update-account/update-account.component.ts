import { Component } from '@angular/core';
import { Client } from '../../models/client';
import { Doctor } from '../../models/doctor';
import { UpdateService } from '../../services/update.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-account',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-account.component.html',
  styleUrl: './update-account.component.css'
})
export class UpdateAccountComponent {
    client:Client=new Client()
    doctor:Doctor=new Doctor()
    error:string=""
    userType:string=""

    constructor(private updateService: UpdateService,private loginService:LoginService, private router:Router) {
      let userDetails:any=localStorage.getItem('user')
      if(userDetails!==null){
        userDetails=JSON.parse(userDetails)
        this.userType=userDetails.type
      }
      
      // console.log(userDetails,this.userType)
      this.loginService.loginUser(userDetails).subscribe(
        {
          next: (data) => {
            // console.log(data);
            if(this.userType==='client'){
              this.client=data
            }
            else if(this.userType==='doctor') {
              this.doctor=data
            }
            // console.log(this.client,this.doctor,data,typeof(data))
            this.error=""
          },
          error: (err) => {
            this.error=err.error
            console.log(err)
          }
        }
      )

      // console.log(this.userType,this.client,this.doctor)
     }

     ngOninit():void {
      
     }

    updateAccount(){
      // console.log(this.userType,this.client)
      if(this.userType==='client'){
        this.updateService.updateAccount(this.client,this.userType).subscribe(
          {
            next: (data) => {
              console.log(data,"updateAccount");
              localStorage.setItem("user", JSON.stringify({id:data.id,name:data.name,type:this.userType,email:data.email,password:data.password}));
              this.error=""
            },
            error: (err) => {
              this.error=err.error
              console.log(err)
            }
          }
        )
      }else if(this.userType ==='doctor'){
        this.updateService.updateAccount(this.doctor,this.userType).subscribe(
          {
            next: (data) => {
              console.log(data,'update');
              localStorage.setItem("user", JSON.stringify({id:data.id,name:data.name,type:this.userType,email:data.email,password:data.password}));
              this.error=""
            },
            error: (err) => {
              this.error=err.error
              console.log(err)
            }
          }
        )
      }

    }

}
