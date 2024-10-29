import { Component, OnInit } from '@angular/core';
import { TestMaster } from 'src/app/shared/test-master';
import { LabtechnicianService } from 'src/app/services/labtechnician.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
  searchTerm: string = '';
  page: number = 1;
  filteredTests: TestMaster[] = [];

  //inject service and router
  constructor(public labtechnicianService: LabtechnicianService,
    private router: Router
  ) { }

  // Lifecycle Hook
  ngOnInit(): void {
    console.log("Hi, I am Test List Component");

    // Fetch all tests
    this.labtechnicianService.getAllTestsList().subscribe(
      (data: TestMaster[]) => {
        this.labtechnicianService.testMasters = data;
        this.filteredTests = data; // Set initially to display all tests
        console.log(data);
        console.log(this.filteredTests);
      },
      (error) => {
        console.log('Error fetching tests', error);
      }
    );
  }

   // Method to filter tests based on searchTerm
   filterTests(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredTests = this.labtechnicianService.testMasters.filter(
      testMaster =>
        testMaster.testName.toLowerCase().includes(term)
    );
  }

  // edit test
  updateTest(testMaster:TestMaster): void{
    console.log(testMaster);
    // keep test object in service
    this.labtechnicianService.testMaster = Object.assign({},testMaster);
    this.router.navigate(['/tests/edit/',testMaster.testId]);
    // localhost:4200/tests/edit/id
    // localhost:4200/tests/edit/4
  }

  // delete test
  deleteTest(_id:number): void{
    console.log(_id);
    if(confirm('Are you sure to DELETE this record?')){
     
      console.log('Deleting...');
    }
  }

}
