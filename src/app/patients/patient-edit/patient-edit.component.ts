// File: patient-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/shared/patient';
import { ReceptionistService } from 'src/app/services/receptionist.service'; // Adjust path if necessary

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent implements OnInit {
  patient: Patient | null = null; // This will hold the patient details
  patientId: number;

  constructor(
    private route: ActivatedRoute,
    private receptionistService: ReceptionistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.patientId = +this.route.snapshot.paramMap.get('id')!; // Get the Patient ID from the route
    this.getPatientDetails(); // Fetch the patient details
  }

  getPatientDetails(): void {
    this.receptionistService.getPatientById(this.patientId).subscribe(
      data => {
        this.patient = data; // Assign the fetched data to patient property
      },
      error => {
        console.error('Error fetching patient details', error);
      }
    );
  }

  updatePatient(): void {
    if (this.patient) {
      this.receptionistService.updatePatient(this.patient).subscribe(
        () => {
          // Redirect or show success message
          this.router.navigate(['/patients/list']); // Redirect to the patient list after updating
        },
        error => {
          console.error('Error updating patient', error);
        }
      );
    }
  }
}
