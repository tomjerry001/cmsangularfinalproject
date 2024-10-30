import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PatientsComponent} from './patients/patients.component';
import { AuthComponent } from './auth/auth.component';

import { StaffsComponent } from './staffs/staffs.component';
import { DoctorsComponent } from './staffs/doctors.component';

import { MedicineComponent } from './medicine/medicine.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';


const routes: Routes = [
  //Empty Route
{path:'',redirectTo:'auth/home', pathMatch:'full'},



  // Empty Route (Redirect to login page)
  //{ path: 'appointments/list', component: AppointmentListComponent },
  
  // Authentication / Authorization (Lazy loading)
//   {
//     path: 'auth',component: AuthComponent,
//     loadChildren: () =>
//       import('./auth/auth.module')
//         .then(m => m.AuthModule)
//   },
    
  {
    path: 'medicines',
    loadChildren: () =>
      import('./medicine/medicine.module').then(x => x.MedicineModule)
  },
  {
    path: 'tests',
    loadChildren: () =>
      import('./test/test.module').then( x => x.TestModule)
  },

  {
    path: 'appointments',component: AppointmentsComponent,
    loadChildren: () =>
      import('./appointments/appointments.module')
        .then(m => m.AppointmentsModule)
  },
  
  
//   {path:'',redirectTo:'auth/receptionist',pathMatch:'full'},
  //Authentication /Authorization
{
  path: 'auth', component: AuthComponent, 
  loadChildren: () =>
    import('./auth/auth.module')
      .then(x => x.AuthModule)
}
  ,
   {
    
    path: 'patients', component: PatientsComponent,
    loadChildren: () =>
      import('./patients/patients.module')
        .then(x => x.PatientsModule)
  },


//Staffs -- lazy loading
{path:'staffs',component:StaffsComponent,
  loadChildren: () => 
   import('./staffs/staffs.module')
    .then(x=>x.StaffsModule)
},

//doctors--lazy loading
{path:'doctors',component:DoctorsComponent,
  loadChildren: () => 
   import('./staffs/staffs.module')
    .then(x=>x.StaffsModule)
},


  {path:'',redirectTo:'auth/pagenotfound',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }