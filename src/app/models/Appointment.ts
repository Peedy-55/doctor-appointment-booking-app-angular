export class Appointment{
    constructor(private id:number, private appointmentDescription:string, private paymentStatus:Boolean, private doctorConfirmationStatus:boolean, private appointmentDate:Date, private appointmentSlot:number,private clientId:number, private doctorId:number){}
}