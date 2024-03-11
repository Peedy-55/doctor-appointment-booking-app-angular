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
    constructor(private registrationService: RegistrationService,private router:Router) { }


    registerClient(){
      this.registrationService.registerClient(this.client).subscribe(
        {
          next: (data) => {
            console.log(data);
            this.error=""
            this.data = data;
          },
          error: (err) => {
            this.error=err.error
            console.log(err)
          }
        }
      )
    }

    registerDoctor(){
      this.registrationService.registerDoctor(this.doctor).subscribe(
        {
          next:(data)=>{
            this.error=""
            console.log(data)
          },
          error:(err)=>{
            this.error=err.error
          }
        }
      )
    }
}
