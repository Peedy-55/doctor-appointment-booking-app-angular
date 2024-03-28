import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DisplayDoctorsService } from '../../services/display-doctors.service';
import { DeleteDoctorService } from '../../services/delete-doctor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchAndSortDoctorPipe } from '../../pipes/search-sort-doctor.pipe';

@Component({
  selector: 'app-all-doctors',
  standalone: true,
  imports: [FormsModule, CommonModule,SearchAndSortDoctorPipe],
  templateUrl: './all-doctors.component.html',
  styleUrl: './all-doctors.component.css'
})
export class AllDoctorsComponent {
  doctors: Doctor[] = [];
  
  error:string=""
  sortType="doctor-name"
  searchType:string="doctor-name"
  searchInput:string=""
  businessLogicError:string=""
  successMessage:string=""
  searchParameters: { searchInput: string; searchType: string } = { searchInput: this.searchInput, searchType: this.searchType };
  selectedDoctorId?:number=0
  formEnabled:boolean = false
  constructor(private displayDoctorsService:DisplayDoctorsService,private deleteDoctorService:DeleteDoctorService){}

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

  deleteDoctor(id?:number){
    this.deleteDoctorService.deleteDoctor(id).subscribe(
      {
        next:(data)=>{
          console.log(data)
          this.businessLogicError=""
          this.successMessage="Account deactivated successfully!"
          this.doctors=data
        },
        error:(err)=>{
          console.log(err)
          if(typeof(err.error)==="string"){
            this.businessLogicError=err.error
          }
          this.successMessage=""
        }
      }
    )
  }
  
}
