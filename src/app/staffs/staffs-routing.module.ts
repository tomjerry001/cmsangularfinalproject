import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffAddComponent } from './staff-add/staff-add.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';

const routes: Routes = [
  //staff-list : https://localhost:4200/staffs/list
  { path: 'list', component: StaffListComponent },
  //staff-add : https://localhost:4200/staffs/add
  { path: 'add', component: StaffAddComponent },
  //staff-edit : https://localhost:4200/staffs/edit
  { path: 'edit/:id', component: StaffEditComponent },
  { path: 'docadd/:id', component: DoctorAddComponent },
  { path: 'docedit/:id', component: DoctorEditComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffsRoutingModule { }
