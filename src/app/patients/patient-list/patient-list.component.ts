import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/patient';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  searchTerm: string = '';
  page: number = 1;
  filteredPatients: Patient[] = [];

  constructor(public receptionistService: ReceptionistService, private router: Router) { }

  ngOnInit(): void {
    this.receptionistService.getAllPatientsList().subscribe(
      (data: Patient[]) => {
        this.receptionistService.patients = data;
        this.filteredPatients = data;
      },
      (error) => {
        console.error('Error fetching patients', error);
      }
    );
  }

  filterPatients(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredPatients = this.receptionistService.patients.filter(patient => 
      patient.PatientName.toLowerCase().includes(term) ||  
      patient.PhoneNumber.includes(term)                   
    );
  }

  bookAppointment(patientId: number): void {
    this.router.navigate(['/patients/book-appointment', patientId]);
  }

  editPatient(patient: Patient): void {
    this.receptionistService.patient = Object.assign({}, patient);
    this.router.navigate(['/patients/edit', patient.PatientId]);
  }

  logout(): void {
    // Redirect to the login page
    window.location.href = "http://localhost:4200/auth/login";
  }
}
