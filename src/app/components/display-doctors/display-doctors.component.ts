import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DisplayDoctorsService } from '../../services/display-doctors.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchAndSortDoctorPipe } from '../../pipes/search-sort-doctor.pipe';
import { Appointment } from '../../models/appointment';
import { BookAppointmentService } from '../../services/book-appointment.service';

@Component({
  selector: 'app-display-doctors',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchAndSortDoctorPipe],
  templateUrl: './display-doctors.component.html',
  styleUrl: './display-doctors.component.css'
})
export class DisplayDoctorsComponent {

  doctors: Doctor[] = [];
  appointment:Appointment=new Appointment();
  error:string=""
  sortType="doctor-name"
  searchType:string="doctor-name"
  searchInput:string=""
  searchParameters: { searchInput: string; searchType: string } = { searchInput: this.searchInput, searchType: this.searchType };
  selectedDoctorId?:number=0
  formEnabled:boolean = false
  constructor(private displayDoctorsService:DisplayDoctorsService,private bookAppointmentService:BookAppointmentService){}

  displayDoctors(){
    // searchParameters:Object={searchInput:this.searchInput,searchType:this.searchType}
    console.log(this.searchType,this.searchInput)
    // console.log(this.searchParameters,"display")

    this.displayDoctorsService.fetchDoctors(this.searchType,this.searchInput).subscribe(
      {
        next:(data)=>{
          console.log(data)
          this.error=""
          this.doctors=data
        },
        error:(err)=>{
          console.log(err)
          this.error=err.error
        }
      }
    )
  }

  initiateBooking(doctorId?:number){
      this.selectedDoctorId=doctorId
      this.formEnabled=true
  }

  makeBooking(doctorId?:number){
    let userDetails:any=localStorage.getItem("user")
      if(userDetails!==null){
        userDetails=JSON.parse(userDetails)
      }
     console.log(userDetails,userDetails.id)
      this.appointment.clientID=userDetails.id
      this.appointment.doctorID=doctorId
    
    console.log(doctorId)

    this.bookAppointmentService.bookAppointment(this.appointment).subscribe(
      {
        next:(data)=>{
          console.log(data)
          // this.error=""
          // this.doctors=data
        },
        error:(err)=>{
          console.log(err)
          // this.error=err.error
        }
      }
    )
  }

}
