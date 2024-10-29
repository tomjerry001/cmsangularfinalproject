import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabtechnicianService } from 'src/app/services/labtechnician.service';
import { TestPrescription } from 'src/app/shared/test-prescription';

@Component({
  selector: 'app-test-prescription-list',
  templateUrl: './test-prescription-list.component.html',
  styleUrls: ['./test-prescription-list.component.scss']
})
export class TestPrescriptionListComponent implements OnInit {
  searchTerm: string = '';
  page: number = 1;
  filteredTestPrescriptions: TestPrescription[] = [];

  // inject service and router
  constructor(public labtechnicianService: LabtechnicianService,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("Hi, I am Test Prescription List Component");

    // Fetch all test prescriptions
    this.labtechnicianService.getAllTestPrescriptionsList().subscribe(
      (data: TestPrescription[]) => {
        this.labtechnicianService.testPrescriptions = data;
        this.filteredTestPrescriptions = data; // Set initially to display all tests
        console.log(data);
        console.log(this.filteredTestPrescriptions);
      },
      (error) => {
        console.log('Error fetching test prescriptions', error);
      }
    );
  }

   // Method to filter tests based on searchTerm
   filterTestPrescriptions(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredTestPrescriptions = this.labtechnicianService.testPrescriptions.filter(
      testPrescription =>
        testPrescription.patientName.toLowerCase().includes(term)
    );
  }

}
