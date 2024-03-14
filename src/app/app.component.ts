import { Component } from '@angular/core';
import { RouterLink,RouterOutlet,RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLinkActive,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doctor-appointment-booking-app';
  loggedIn = localStorage.getItem('loggedIn')==='true'; 
  userType:string=""
  constructor(){
      let userDetails:any = localStorage.getItem('user')
      if(userDetails!==null){
        userDetails=JSON.parse(userDetails)
        this.userType = userDetails.type
        // console.log(this.userType)
      }
  }

  logout(){
    localStorage.removeItem('user')
    localStorage.setItem('loggedIn', "false")
  }
}
