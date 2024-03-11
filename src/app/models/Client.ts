import { Appointment } from "./appointment";

export class Client{
    constructor(public name:string="",public email:string="",public password:string="",public dateOfBirth:Date=new Date(),public age?:number,public mobileNumber:number=0,public isActive:boolean=true, public appointmentList:Appointment[]=new Array() ,public id?:number){}
}