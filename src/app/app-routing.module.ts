import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentListComponent } from './appointments/appointment-list/appointment-list.component';

const routes: Routes = [
  // Empty Route (Redirect to login page)
  //{ path: 'appointments/list', component: AppointmentListComponent },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // Authentication / Authorization (Lazy loading)
  {
    path: 'auth',component: AuthComponent,
    loadChildren: () =>
      import('./auth/auth.module')
        .then(m => m.AuthModule)
  },
  {
    path: 'appointments',component: AppointmentsComponent,
    loadChildren: () =>
      import('./appointments/appointments.module')
        .then(m => m.AppointmentsModule)
  },
  
  // Wild Card Route for 404 page (Page Not Found)
  { path: '**', redirectTo: 'auth/pagenotfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
