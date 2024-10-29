import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { StaffsComponent } from './staffs/staffs.component';
import { DoctorsComponent } from './staffs/doctors.component';

const routes: Routes = [
  //Empty Route
{path:'',redirectTo:'auth/home', pathMatch:'full'},

//Authentication /Authorization
{
  path: 'auth', component: AuthComponent, 
  loadChildren: () =>
    import('./auth/auth.module')
      .then(x => x.AuthModule)
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


//Wild Card Route
{path:'**',redirectTo:'auth/pagenotfound', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
