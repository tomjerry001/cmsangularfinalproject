import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';  // Update the path to match your project structure

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.scss']
})
export class DoctorAddComponent implements OnInit {

  //declare variable
  sId: number;
 
  constructor(
    public adminService: AdminService,  // Service to handle doctor-related operations
    private router: Router, private route: ActivatedRoute, 
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // get all specializations
    this.adminService.getAllSpecializations();  
    this.sId=this.route.snapshot.params["id"];
    console.log("Sid");
    console.log(this.sId);
    this.adminService.doctor.StaffId=this.sId;
    
  }
// Back Button Method
goBack(): void {
  this.router.navigate(['/staffs/list']); 
}

  

  // Submit Form
  onSubmit(form: NgForm): void {
    console.log(form.value);

    // Call Insert method
    this.addDoctor(form);

    // Reset Form
    form.reset();

    // Redirect to doctor list
    this.router.navigate(['/staffs/list']);
  }

  // Insert doctor
  addDoctor(form?: NgForm): void {
    console.log("Inserting....");

    // Call the insertDoctor method from the service and pass the form values
    this.adminService.insertDoctor(form.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.toastr.success("Doctor has been added successfully", 'Clinic Management');
          this.adminService.getAllSpecializations();  // Refresh doctor list after insertion
          //this.adminService.doctor.StaffId=this.adminService.staff.StaffId;

        },
        (error) => {
          console.error(error);
          this.toastr.error('Oops! Something went wrong, please try again', 'Clinic Management');
        }
      );
  }
}