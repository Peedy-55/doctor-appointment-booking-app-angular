import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DisplayDoctorsComponent } from './components/display-doctors/display-doctors.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'register', component:RegistrationComponent},
    {path:'doctors', component:DisplayDoctorsComponent}
];
