import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PatientsComponent} from './patients/patients.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:'',redirectTo:'auth/receptionist',pathMatch:'full'},
  //Authentication /Authorization
{
  path: 'auth', component: AuthComponent, 
  loadChildren: () =>
    import('./auth/auth.module')
      .then(x => x.AuthModule)
},
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