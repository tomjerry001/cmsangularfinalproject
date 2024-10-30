import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import this

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AppointmentConsultComponent } from './appointment-consult/appointment-consult.component';
import { AppointmentMedComponent } from './appointment-med/appointment-med.component';
import { AppointmentTestComponent } from './appointment-test/appointment-test.component';


@NgModule({
  declarations: [AppointmentsComponent,AppointmentListComponent, AppointmentConsultComponent,
     AppointmentMedComponent, AppointmentTestComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    AppointmentsRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  exports:[AppointmentListComponent]
})
export class AppointmentsModule { }
