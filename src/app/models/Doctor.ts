import { Appointment } from "./appointment";

export class Doctor{
    constructor(public name: string="",public email:string="",public password:string="",public specialization:string="",public experience:number=0,public mobileNumber:number=0,public consultancyFee:number=0,public isActive:boolean=true,public appointmentList:Appointment[]=new Array(),public id?: number){}
    
}