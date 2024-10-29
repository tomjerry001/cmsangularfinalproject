import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PatientsComponent} from './patients/patients.component';
import { AuthComponent } from './auth/auth.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';

const routes: Routes = [

  // Empty Route (Redirect to login page)
  //{ path: 'appointments/list', component: AppointmentListComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // Authentication / Authorization (Lazy loading)
//   {
//     path: 'auth',component: AuthComponent,
//     loadChildren: () =>
//       import('./auth/auth.module')
//         .then(m => m.AuthModule)
//   },
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

  {path:'',redirectTo:'auth/pagenotfound',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }