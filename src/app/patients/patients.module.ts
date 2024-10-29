import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';

import { PatientsComponent } from 'src/app/patients/patients.component'; // Updated import

import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { PatientBookAppointmentComponent } from './patient-bookappointment/patient-bookappointment.component';

import { PatientconsultationbillComponent } from './patientconsultationbill/patientconsultationbill.component';




@NgModule({
  declarations: [PatientsComponent, PatientAddComponent, PatientListComponent, PatientEditComponent, PatientBookAppointmentComponent, PatientconsultationbillComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  ],
  exports:[PatientListComponent]
})
export class PatientsModule { }