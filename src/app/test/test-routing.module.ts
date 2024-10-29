import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAddComponent } from './test-add/test-add.component';
import { TestUpdateComponent } from './test-update/test-update.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestPrescriptionListComponent } from './test-prescription-list/test-prescription-list.component';

const routes: Routes = [
  //test-add : https:/localhost:4200/tests/add
  { path: 'add', component: TestAddComponent },
  //test-edit : https:/localhost:4200/tests/edit/id
  { path: 'edit/:id', component: TestUpdateComponent },
  //test-list : https:/localhost:4200/tests/list
  { path: 'list', component: TestListComponent },
  //test-prescription-list: https:/localhost:4200/tests/testprelist
  { path: 'testprelist', component: TestPrescriptionListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
