import { Component } from '@angular/core';
import { Appointment } from '../../models/appointment';
import { DisplayAppointmentsService } from '../../services/display-appointments.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-appointments.component.html',
  styleUrl: './display-appointments.component.css'
})
export class DisplayAppointmentsComponent {
    appointments: Appointment[]=[]
    
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
