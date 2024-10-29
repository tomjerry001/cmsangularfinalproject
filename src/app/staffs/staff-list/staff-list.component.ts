import { Component, OnInit } from '@angular/core';
import {AdminService} from 'src/app/services/admin.service';
import { Staff } from 'src/app/shared/staff';
import {Router} from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { Doctor } from 'src/app/shared/doctor';
@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  // declare variables
  searchTerm: string ='';
  page: number=1;

  //Use this for filtered staffs
  filteredStaffs:Staff[]=[];
  
  // Inject Service
  constructor(public adminService: AdminService, 
    private router:Router
  ) { }
  // Back Button Method
  goBack(): void {
    this.router.navigate(['/auth/admin']); 
  }
  // Life Cycle Hook
  ngOnInit(): void {
    console.log('Hi, Iam Staff List Component');
    //this.adminService.getAllStaffs(); // promise

    //Observable Type
    this.adminService.getAllStaffsList().subscribe(
      (data:Staff[])=>{
        this.adminService.staffs=data; //global
        this.filteredStaffs=data; //component
      },
      (error)=>{
        console.error('Error fetching staffs',error);
      }
    )
    

  }

  //Method to filter staffs based on searchTerm
  filterStaffs(): void{
    const term= this .searchTerm.toLowerCase()
    this.filteredStaffs=this.adminService.staffs.filter(
    staff=> staff.FirstName.toLowerCase().includes(term)||
    staff.Email.toLowerCase().includes(term)
    );
  }

  //  Edit Staff
   editStaff(staff: Staff): void{
  console.log(staff);
  //   // Keep staff object
    this.adminService.staff=Object.assign({},staff);
   this.router.navigate(['/staffs/edit',staff.StaffId]);
   }
//navigate from staff to doctor
addDoctor(staff: Staff): void {
  console.log(staff);
  // Assuming doctor is already defined as a Doctor object
  //this.adminService.doctor = Object.assign({}, staff);
  this.router.navigate(['/staffs/docadd',staff.StaffId]); // Redirect to doctors/list route
} 
  }
 
  