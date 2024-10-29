import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Appointmentvm } from 'src/app/shared/appointmentvm';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/patient'; // Import your Patient model
import { MedicinePrescriptionvm } from 'src/app/shared/medicine-prescriptionvm';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  // Declare variables
  searchTerm: string = '';
  page: number = 1;

  //use this for filtered appointments
  filteredAppointmentvm: Appointmentvm[] = [];

  //Inject Service and Router
  constructor(
    public doctorService: DoctorService,
    private router: Router
  ) { }



  //Life Cycle Hook
  ngOnInit(): void {
    console.log('Hi, I am Appointment List Component');

    //Observable method using
    this.doctorService.getAllAppointmentsList().subscribe(
      (data: Appointmentvm[]) => {
        this.doctorService.appointmentsvm = data; //global
        this.filteredAppointmentvm = data;         //component
      },
      (error) => {
        console.error('Error Fetching Appointments', error)
      }
    )
  }


  //Method to fliter appointments based on searchTerm
  // filterAppointmentvm(): void {
  //   const term = this.searchTerm.toLowerCase()
  //   this.filteredAppointmentvm = this.doctorService.appointmentsvm.filter(
  //     appointmentsvm =>
  //       appointmentsvm.PatientName.toLowerCase().includes(term) ||
  //     appointmentsvm.TokenNumber.toString().includes(term) ||          // Convert TokenNumber to string and check if it contains the search term
  //     appointmentsvm.AppointmentId.toString().includes(term)
  //   );
  // }

  // Method to filter appointments based on searchTerm
filterAppointmentvm(): void {
  const term = this.searchTerm.toLowerCase();
  this.filteredAppointmentvm = this.doctorService.appointmentsvm.filter(
    appointment =>
      appointment.Patient.PatientName.toLowerCase().includes(term) ||   // Search by Patient Name
      appointment.TokenNumber.toString().includes(term) ||              // Search by Token Number
      appointment.AppointmentId.toString().includes(term)               // Search by Appointment ID
  );
}



  //Consult Appointment
  consultPatient(appointment: Appointmentvm): void {
    console.log(appointment);
    //Keep appointment object in service
    this.doctorService.appointmentvm = Object.assign({}, appointment);
    this.router.navigate(['/appointments/consult', appointment.AppointmentId]);
    // localhost:4200/appointments/consult/id


   
  }
}


