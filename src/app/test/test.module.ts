import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestAddComponent } from './test-add/test-add.component';
import { TestUpdateComponent } from './test-update/test-update.component';
import { TestPrescriptionListComponent } from './test-prescription-list/test-prescription-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestBillComponent } from './test-bill/test-bill.component';
import { TestReportComponent } from './test-report/test-report.component';

@NgModule({
  declarations: [TestComponent, TestListComponent, TestAddComponent, TestUpdateComponent, TestPrescriptionListComponent, TestDetailsComponent, TestBillComponent, TestReportComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
    
  
})
export class TestModule { }
