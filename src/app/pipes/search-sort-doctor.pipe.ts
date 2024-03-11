import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from '../models/doctor';

@Pipe({
  name: 'searchDoctor',
  standalone: true
})
export class SearchAndSortDoctorPipe implements PipeTransform {

  transform(doctors: Doctor[], searchType:string,searchInput:string,sortType:string): Doctor[] {
    let filteredDoctors:Doctor[]
    if(searchType=="" || searchInput=="") filteredDoctors=doctors
    else if(searchType=='doctor-name'){
      filteredDoctors= doctors.filter(doctor=>doctor.name.toLowerCase().includes(searchInput.toLowerCase()))
    }else{
       filteredDoctors=doctors.filter(doctor=>doctor.specialization.toLowerCase().includes(searchInput.toLowerCase()))
    }

    switch(sortType){
      case 'doctor-name':
        return filteredDoctors.sort((doctor1,doctor2)=>doctor1.name.localeCompare(doctor2.name))
        
      case 'specialization':
        return filteredDoctors.sort((doctor1,doctor2)=>doctor1.specialization.localeCompare(doctor2.specialization))
       
      case 'experience':
        return filteredDoctors.sort((doctor1,doctor2)=>doctor1.experience-doctor2.experience)
       
      case 'consultancy-fee':
        return filteredDoctors.sort((doctor1,doctor2)=>doctor1.consultancyFee-doctor2.consultancyFee)
        
      default:
        return doctors
    }
  }

}
