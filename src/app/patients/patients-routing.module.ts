// File: patients-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientBookAppointmentComponent } from './patient-bookappointment/patient-bookappointment.component';
import { PatientconsultationbillComponent } from './patientconsultationbill/patientconsultationbill.component'; // Import the consultation bill component

const routes: Routes = [
  { path: 'list', component: PatientListComponent },
  { path: 'add', component: PatientAddComponent },
  { path: 'edit/:id', component: PatientEditComponent },
  { path: 'book-appointment/:PatientId', component: PatientBookAppointmentComponent },
  { path: 'patientconsultationbill', component: PatientconsultationbillComponent } // Add this route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
