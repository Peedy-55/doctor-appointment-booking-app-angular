import { Appointment } from "./appointment";

export class Client{
    constructor(private id:number,private name:string,private email:string,private password:string,private dateOfBirth:Date,private age:number,private mobileNumber:number,private isActive:boolean, private appointmentList:Appointment[]=new Array() ){}
}