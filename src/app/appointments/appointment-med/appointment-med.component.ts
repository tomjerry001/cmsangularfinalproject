import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment-med',
  templateUrl: './appointment-med.component.html',
  styleUrls: ['./appointment-med.component.scss']
})
export class AppointmentMedComponent implements OnInit {

  medicineForm: FormGroup; // Reactive form for consultation details
  
  PrescriptionId: number;

  constructor(
    private formBuilder: FormBuilder,
    public doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    // Initialize Reactive Form with Validators
    this.medicineForm = this.formBuilder.group({
      MedicineId: [null, Validators.required], // Add this line
      Duration: ['', Validators.required],
      Notes: ['', [Validators.required, Validators.minLength(3)]]
    });

    // Initialize Prescription ID from doctor service if necessary
    this.doctorService.medicineprescriptionvm.AppointmentId = this.doctorService.appointmentvm.AppointmentId;
  }

  // Handle Form Submission
  onSubmit() {
    if (this.medicineForm.valid) {
      // Prepare data to send to the backend
      const prescriptionData = {
        MedicineId: this.medicineForm.value.MedicineId,
        AppointmentId: this.doctorService.medicineprescriptionvm.AppointmentId, // Ensure this is set
        Duration: this.medicineForm.value.Duration,
        Notes: this.medicineForm.value.Notes
      };

      // Call Insert method with prepared data
      this.insertMedicinePrescription(prescriptionData);

      // Reset the form after submission
      this.medicineForm.reset();
    } else {
      console.log("Form is invalid");
    }
  }
  

  // Insert Medicine Prescription
  insertMedicinePrescription(prescriptionData: any) {
    console.log("Test Prescription Inserting...");
    this.doctorService.insertMedicinePrescription(prescriptionData)
      .subscribe(
        (response) => {
          console.log(response);
          this.toastr.success('Medicine Prescription has been inserted successfully');
        },
        (error) => {
          console.error(error);
          this.toastr.error('Oops...! Something went wrong... Please try again.');
        }
      );
  }
}