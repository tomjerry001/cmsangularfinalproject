import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from 'src/app/services/receptionist.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {

  PatientName: string;
  DOB: Date;
  PhoneNumber: string;

  // Method to check if the date is in the future
  

  constructor(public receptionistService:ReceptionistService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
   
  }
  

  // Submit Form
  onSubmit(form: NgForm){
console.log(form.value);

//Call Insert method
this.addPatient(form);
//Reset Form
form.reset();

//Redirect to list
this.router.navigate(['/patients/list'])
  }
  isFutureDate(dateString: Date): boolean {
    const today = new Date();
    const selectedDate = new Date(dateString);
    return selectedDate > today;
}

  // Insert
  addPatient(form?: NgForm) {
    console.log("Inserting...");
    this.receptionistService.addPatient(form.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.toastr.success('Record has been inserted successfully','cmsangularfinalproject');
          this.receptionistService.getAllPatientsList();
        },
        (error) => {
          console.log(error);
          this.toastr.error('ooPS sOMETHING wRONG ! Try again','EMSV2024');
        }

      )

  }

}