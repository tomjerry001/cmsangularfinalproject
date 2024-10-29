import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MedicineComponent } from './medicine/medicine.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./auth/auth.module').then(x => x.AuthModule)
  },
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
  { path: '**', redirectTo: 'auth/pagenotfound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
