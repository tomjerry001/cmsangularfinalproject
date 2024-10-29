import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LabtechnicianService } from 'src/app/services/labtechnician.service';

@Component({
  selector: 'app-test-update',
  templateUrl: './test-update.component.html',
  styleUrls: ['./test-update.component.scss']
})
export class TestUpdateComponent implements OnInit {

  constructor(public labtechnicianService: LabtechnicianService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

   // Submit form
   onSubmit(form: NgForm){
    console.log(form.value);

    // call Update method
    this.updateTest(form);

    // Reset form
    form.reset();

  }

  // Update
  updateTest(form?: NgForm){
    console.log("Updating...");
    this.labtechnicianService.updateTest(form.value)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
