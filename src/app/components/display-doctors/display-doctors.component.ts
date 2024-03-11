import { Component } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { DisplayDoctorsService } from '../../services/display-doctors.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchAndSortDoctorPipe } from '../../pipes/search-sort-doctor.pipe';

@Component({
  selector: 'app-display-doctors',
  standalone: true,
  imports: [CommonModule,FormsModule,SearchAndSortDoctorPipe],
  templateUrl: './display-doctors.component.html',
  styleUrl: './display-doctors.component.css'
})
export class DisplayDoctorsComponent {

  doctors: Doctor[] = [];
  error:string=""
  sortType="doctor-name"
  searchType:string="doctor-name"
  searchInput:string=""
  searchParameters: { searchInput: string; searchType: string } = { searchInput: this.searchInput, searchType: this.searchType };
  constructor(private displayDoctorsService:DisplayDoctorsService){}

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

}
