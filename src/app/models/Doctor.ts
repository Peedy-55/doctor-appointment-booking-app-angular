import { Appointment } from "./Appointment";

export class Doctor{
    constructor(private id: number,private name: string,private specialization:string,private experience:string,private mobileNumber:number,private consultancyFee:number,private isActive:boolean,private email:string,private password:string,private appointmentList:Appointment[]=new Array()){}
    
}