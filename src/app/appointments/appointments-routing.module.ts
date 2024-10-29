import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentConsultComponent } from './appointment-consult/appointment-consult.component';
import{AppointmentMedComponent} from './appointment-med/appointment-med.component';
import { AppointmentTestComponent } from './appointment-test/appointment-test.component';

const routes: Routes = [
  //http://localhost:4200/appointments/list
  {path:'list',component:AppointmentListComponent},
  
  //http://localhost:4200/appointments/consult/5001
  {path: 'consult/:id',component: AppointmentConsultComponent},

  {path: 'med/:id',component: AppointmentMedComponent},

  {path: 'test/:id',component: AppointmentTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
