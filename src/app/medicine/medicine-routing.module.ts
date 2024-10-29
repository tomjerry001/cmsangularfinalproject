import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineUpdateComponent } from './medicine-update/medicine-update.component';
import { MedicinePrescriptionListComponent } from './medicine-prescription-list/medicine-prescription-list.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';

const routes: Routes = [
  //medicine-add : https:/localhost:4200/medicines/add
  { path: 'add', component: MedicineAddComponent },
  //medicine-edit : https:/localhost:4200/medicines/edit/id
  { path: 'edit/:id', component: MedicineUpdateComponent },
  //medicine-list : https:/localhost:4200/medicines/list
  { path: 'list', component: MedicineListComponent },
  //medicine-prescription-list: https:/localhost:4200/medicines/medprelist
  { path: 'medprelist', component: MedicinePrescriptionListComponent },

  {path: 'details/:medicinePrescriptionId',component: MedicineDetailsComponent}

  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineRoutingModule { }
