import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from '../models/appointment';

@Pipe({
  name: 'searchSortAppointments',
  standalone: true
})
export class SearchSortAppointmentsPipe implements PipeTransform {

  transform(appointments:Appointment[], searchInput:Date): Appointment[] {
    const searchDate = new Date(searchInput);
    searchDate.setHours(0, 0, 0, 0);

    const filteredAppointments = appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.appointmentDate);
      appointmentDate.setHours(0, 0, 0, 0);
      return appointmentDate.getTime() === searchDate.getTime();
    });

    // const filteredAppointments=appointments.filter((appointment)=>appointment.appointmentDate===searchInput)
    return filteredAppointments.sort((appointment1,appointment2)=>appointment1.appointmentDate.getTime()-appointment2.appointmentDate.getTime())
  }

}
