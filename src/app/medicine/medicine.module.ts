import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineRoutingModule } from './medicine-routing.module';
import { MedicineComponent } from './medicine.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineUpdateComponent } from './medicine-update/medicine-update.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MedicinePrescriptionListComponent } from './medicine-prescription-list/medicine-prescription-list.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineBillComponent } from './medicine-bill/medicine-bill.component';

@NgModule({
  declarations: [
    MedicineComponent,
    MedicineListComponent,
    MedicineAddComponent,
    MedicineUpdateComponent,
    MedicinePrescriptionListComponent,
    MedicineDetailsComponent,
    MedicineBillComponent
  ],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  exports:[MedicinePrescriptionListComponent]
})
export class MedicineModule { }
