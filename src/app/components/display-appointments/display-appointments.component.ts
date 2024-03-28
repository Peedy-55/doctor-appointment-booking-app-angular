import { Component } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { DisplayAppointmentsService } from '../../services/display-appointments.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchSortAppointmentsPipe } from '../../pipes/search-sort-appointments.pipe';

@Component({
  selector: 'app-display-appointments',
  standalone: true,
  imports: [CommonModule,SearchSortAppointmentsPipe,FormsModule],
  templateUrl: './display-appointments.component.html',
  styleUrl: './display-appointments.component.css'
})
export class DisplayAppointmentsComponent {
    appointments: Appointment[]=[]
    searchInput: Date= new Date()
    constructor(private displayAppointmentsService: DisplayAppointmentsService){
      let userData:any=localStorage.getItem('user')

      if(userData!==null){
        userData=JSON.parse(userData)
      }

      let userId=userData.id
      let userType=userData.type

      this.displayAppointmentsService.displayAppointments(userId,userType).subscribe(
        {
          next:(data)=>{
            console.log(data,typeof(data))
            this.appointments=data
            
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
