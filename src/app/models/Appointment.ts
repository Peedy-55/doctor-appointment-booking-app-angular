export class Appointment{
    constructor(public id?:number, public appointmentDescription:string="", public paymentStatus:Boolean=false, public doctorConfirmationStatus:boolean=false, public appointmentDate:Date=new Date(), public appointmentSlot:number=1,public clientID:number=0, public doctorID?:number){}
}