import { Component } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';
import { Client } from '../../models/client';
import { Doctor } from '../../models/doctor';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
    userType: string="client"
    client:Client=new Client()
    doctor:Doctor=new Doctor()
    data:any
    error:string=""
    businessLogicError:string=""
    successMessage:string=""
    constructor(private registrationService: RegistrationService,private router:Router) { }


    registerClient(){
      this.registrationService.registerClient(this.client).subscribe(
        {
          next: (data) => {
            console.log(data);
            this.businessLogicError=""
            this.successMessage="Account registered successfully!"
            this.data = data;
          },
          error: (err) => {
            if(typeof(err.error)==="string"){
              this.businessLogicError=err.error
            }
            this.successMessage=""
            console.log(err)
          }
        }
      )
    }

    registerDoctor(){
      this.registrationService.registerDoctor(this.doctor).subscribe(
        {
          next:(data)=>{
            this.businessLogicError=""
            this.successMessage="Account registered successfully!"
            console.log(data)
          },
          error:(err)=>{
            if(typeof(err.error)==="string"){
              this.businessLogicError=err.error
            }
            this.successMessage=""
            console.log(err)
          }
        }
      )
    }
}
