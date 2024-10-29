import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appointment-test',
  templateUrl: './appointment-test.component.html',
  styleUrls: ['./appointment-test.component.scss']
})
export class AppointmentTestComponent implements OnInit {

  testForm: FormGroup; // Reactive form for consultation details
  TestPrescriptionId: number;

  constructor(
    private formBuilder: FormBuilder,
    public doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    // Initialize Reactive Form with Validators
    this.testForm = this.formBuilder.group({
      TestId: [null, Validators.required], // Add this line
      Notes: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.doctorService.testprescriptionvm.AppointmentId = this.doctorService.appointmentvm.AppointmentId; // initialization

  }


  //Submit form
  onSubmit(form: NgForm) {
    if (this.testForm.valid) {
      // Prepare data to send to the backend
      const prescriptionData = {
        TestId: this.testForm.value.TestId,
        AppointmentId: this.doctorService.testprescriptionvm.AppointmentId, // Ensure this is set
        Notes: this.testForm.value.Notes
      };

      //call Insert method
      this.insertTestPrescription(prescriptionData);


      // Reset the form after submission
      this.testForm.reset();
    } else {
      console.log("Form is invalid");
    }
  }


  insertTestPrescription(prescriptionData: any) {
    console.log("Test Prescription Inserting...");

    this.doctorService.insertTestPrescription(prescriptionData)
      .subscribe(
        (response) => {
          console.log(response);
          this.toastr.success('Test Prescription has been inserted successfully');
          //this.doctorService.getAllEmployees();
        }
      ),
      (error) => {
        console.log(error);
        this.toastr.error('Oops...!Something went wrong...!Try Again...');
      }
  }
}

