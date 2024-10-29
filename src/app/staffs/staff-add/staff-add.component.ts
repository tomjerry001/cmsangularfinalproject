import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.scss']
})
export class StaffAddComponent implements OnInit {

  isFutureDate: boolean = false;

  constructor(
    public adminService: AdminService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
     this.adminService.getAllRoles();
  }

  // Back Button Method
  goBack(): void {
    this.router.navigate(['/staffs/list']); 
  }

  // Validate Joining Date
  validateJoiningDate() {
    const today = new Date();
    const selectedDate = new Date(this.adminService.staff.JoiningDate);
    this.isFutureDate = selectedDate > today;
  }

  // Submit Form
  onSubmit(form: NgForm) {
    this.validateJoiningDate();
    if (this.isFutureDate) {
      this.toastr.error('Joining Date cannot be a future date.');
      return; // Do not proceed if date is invalid
    }

    console.log(form.value);
    this.addStaff(form);

    // Reset Form
    form.reset();
  }

  // Insert
  addStaff(form: NgForm) {
    this.adminService.insertStaff(form.value)
      .subscribe(
        (response) => {
          this.toastr.success("Record has been inserted successfully");
          this.adminService.getAllStaffsList();
          this.router.navigate(['/staffs/list']);
        },
        (error) => {
          this.toastr.error('Oops! Something went wrong, try again...');
        }
      );
  }
}
