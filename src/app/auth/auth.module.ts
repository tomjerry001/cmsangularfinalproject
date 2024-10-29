import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LabtechnicianComponent } from './labtechnician/labtechnician.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { ReceptionistnavbarComponent } from './receptionistnavbar/receptionistnavbar.component';
import { DoctornavbarComponent } from './doctornavbar/doctornavbar.component';
import { PharmacistnavbarComponent } from './pharmacistnavbar/pharmacistnavbar.component';
import { LabtechniciannavbarComponent } from './labtechniciannavbar/labtechniciannavbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { Patient } from '../shared/patient';
import { PatientsModule } from '../patients/patients.module';


@NgModule({
  declarations: [AuthComponent, LoginComponent, HomeComponent, AdminComponent, DoctorComponent, ReceptionistComponent, PharmacistComponent, LabtechnicianComponent, NavbarComponent, AdminnavbarComponent, ReceptionistnavbarComponent, DoctornavbarComponent, PharmacistnavbarComponent, LabtechniciannavbarComponent, PagenotfoundComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PatientsModule
  ]
})
export class AuthModule { }
