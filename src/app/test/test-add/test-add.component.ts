import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LabtechnicianService } from 'src/app/services/labtechnician.service';

@Component({
  selector: 'app-test-add',
  templateUrl: './test-add.component.html',
  styleUrls: ['./test-add.component.scss']
})
export class TestAddComponent implements OnInit {

  constructor(public labtechnicianService: LabtechnicianService,
       private router: Router
  ) { }

  ngOnInit(): void {
  }

  // Submit form
  onSubmit(form: NgForm){
    console.log(form.value);

    // call Insert method
    this.addTest(form);

    // Reset form
    form.reset();

    // Redirect to list
    this.router.navigate(['/tests/list'])

  }

  // Insert
  addTest(form?: NgForm){
    console.log("Inserting...");
    this.labtechnicianService.insertTest(form.value)
    .subscribe(
      (response) => {
        console.log(response);
        //this.toastr.success('Record has been inserted successfully','CMSv2024');
        this.labtechnicianService.getAllTests();
      },
      (error) => {
        console.log(error);
        //this.toastr.error('Oops! Something wrong, try again','CMSv2024');
      }
    );
  }

}
