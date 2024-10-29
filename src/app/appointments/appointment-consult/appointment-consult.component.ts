// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DoctorService } from 'src/app/services/doctor.service';
// import { ToastrService } from 'ngx-toastr';
// import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import { Appointmentvm } from 'src/app/shared/appointmentvm';
// import { Patient } from 'src/app/shared/patient';
// import { Prescriptionvm } from 'src/app/shared/prescriptionvm';
// import { MedicinePrescriptionvm } from 'src/app/shared/medicine-prescriptionvm';


// @Component({
//   selector: 'app-appointment-consult',
//   templateUrl: './appointment-consult.component.html',
//   styleUrls: ['./appointment-consult.component.scss']
// })
// export class AppointmentConsultComponent implements OnInit {
//   consultationForm: FormGroup; // Reactive form for consultation details
//   AppointmentId: number = 0;
//   patientDetails: Patient | null = null; // Variable to store patient details

//   constructor(
//     private formBuilder: FormBuilder,
//     public doctorService: DoctorService,
//     private route: ActivatedRoute,
//     private router: Router,
//     private toastr: ToastrService
//   ) { }

//   //Life Cycle Hook
//   ngOnInit(): void {

//     // Initialize values if necessary
//     this.doctorService.prescriptionvm.AppointmentId = this.doctorService.appointmentvm.AppointmentId; 
//     //this.doctorService.prescriptionvm.p = this.doctorService.appointmentvm.PatientName; // initialization
//     //this.doctorService.testprescriptionappointmentid = this.doctorService.appointment.AppointmentId; // Example initialization
//   }

//   //Submit form
//   onSubmit(form: NgForm) {
//     console.log(form.value);

//     //call Insert method
//     this.insertPrescription(form);


//     //Reset the form
//     form.reset();
//     // this.resetMainprescription(); 

//     //Redirect to List
//     // this.router.navigate(['/employees/list']);
//     //window.location.href='/employees/list'
//   }

//   //Insert Prescription
//   insertPrescription(form?: NgForm) {
//     console.log("Prescription Inserting...");

//     this.doctorService.insertPrescription(form.value)
//       .subscribe(
//         (response) => {
//           console.log(response);
//           this.toastr.success('Record has been inserted successfully');
//           //this.doctorService.getAllEmployees();
//         }
//       ),
//       (error) => {
//         console.log(error);
//         this.toastr.error('Oops...!Something went wrong...!Try Again...');
//       }
//   }

//   //Medicine Prescription
//   medicinePrescribe(medicineprescription: MedicinePrescriptionvm): void {
//     console.log(medicineprescription);
//     //Keep appointment object in service
//     this.doctorService.medicineprescriptionvm = Object.assign({}, medicineprescription);
//     this.router.navigate(['/appointments/med', medicineprescription.PrescriptionId]);
//     // localhost:4200/appointments/consult/id


//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, NgForm } from '@angular/forms';
import { MedicinePrescriptionvm } from 'src/app/shared/medicine-prescriptionvm';
import { Patient } from 'src/app/shared/patient';
import { TestPrescriptionvm } from 'src/app/shared/test-prescriptionvm';

@Component({
  selector: 'app-appointment-consult',
  templateUrl: './appointment-consult.component.html',
  styleUrls: ['./appointment-consult.component.scss']
})
export class AppointmentConsultComponent implements OnInit {
  consultationForm: FormGroup;
  AppointmentId: number ;
  patientDetails: Patient ;
  medicineprescription: MedicinePrescriptionvm = new MedicinePrescriptionvm(); // Initialize

  constructor(
    public doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.doctorService.prescriptionvm.AppointmentId = this.doctorService.appointmentvm.AppointmentId; 
    
    //get all departments
    this.doctorService.getAllMedicines();
    this.doctorService.getAllTests();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.insertPrescription(form);
    form.reset();
  }

  insertPrescription(form?: NgForm) {
    console.log("Prescription Inserting...");
    this.doctorService.appointmentvm.ConsultationStatus = true; // Set status to true
    this.doctorService.insertPrescription(form.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.toastr.success('Record has been inserted successfully');
        },
        (error) => {
          console.log(error);
          this.toastr.error('Oops...! Something went wrong...! Try Again...');
        }
      );
  }

  
  // //Medicine Prescription
  // medicinePrescribe(medicineprescription: MedicinePrescriptionvm): void {
  //   console.log(medicineprescription);
  //   //Keep appointment object in service
  //   this.doctorService.medicineprescriptionvm = Object.assign({}, medicineprescription);
  //   this.router.navigate(['/appointments/med', medicineprescription.PrescriptionId]);
  //   // localhost:4200/appointments/consult/id


  // // Updated method
  // medicinePrescribe(): void { // No parameter needed
  //   console.log(this.medicineprescription);
  //   this.doctorService.medicineprescriptionvm = Object.assign({}, this.medicineprescription);
  //   this.router.navigate(['/appointments/med', this.medicineprescription.PrescriptionId]);

  
  // testPrescribe(testprescription: TestPrescriptionvm): void {
  //   console.log(medicineprescription);
  //   //Keep appointment object in service
  //   this.doctorService.medicineprescriptionvm = Object.assign({}, medicineprescription);
  //   this.router.navigate(['/appointments/med', medicineprescription.PrescriptionId]);
  //   // localhost:4200/appointments/consult/id

  }
  



