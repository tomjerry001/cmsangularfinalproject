import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';  

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.scss']
})
export class StaffEditComponent implements OnInit {

  constructor(public adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getAllRoles();  
  }
   // Back Button Method
   goBack(): void {
    this.router.navigate(['/staffs/list']); 
  }

  // Submit Form
  onSubmit(form: NgForm) {
    console.log(form.value);
    
    // Call the method to update staff information
    this.updateStaff(form);

    // Reset Form after submission
    form.reset();
    this.router.navigate(['/staffs/list']);
  }

  // Update Staff Method
  updateStaff(form?: NgForm) {
    console.log("Updating staff...");
    this.adminService.updateStaff(form.value)
      .subscribe(
        (response) => {
          console.log(response);
          // Optionally navigate to the staff list or show success message
            // Update route as necessary
        },
        (error) => {
          console.log(error);
         
         
        }
      );
  }
}
