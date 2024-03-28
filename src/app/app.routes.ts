import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DisplayDoctorsComponent } from './components/display-doctors/display-doctors.component';
import { DisplayAppointmentsComponent } from './components/display-appointments/display-appointments.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';
import { AllDoctorsComponent } from './components/all-doctors/all-doctors.component';
import { AllClientsComponent } from './components/all-clients/all-clients.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'register', component:RegistrationComponent},
    {path:'update-account', component:UpdateAccountComponent},
    {path:'doctors', component:DisplayDoctorsComponent},
    {path:'appointments', component:DisplayAppointmentsComponent},
    {path:'all-doctors', component:AllDoctorsComponent},
    {path:'all-clients', component:AllClientsComponent},
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**',redirectTo: 'not-found' }
];
