import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PharmacistService } from 'src/app/services/pharmacist.service';

@Component({
  selector: 'app-medicine-update',
  templateUrl: './medicine-update.component.html',
  styleUrls: ['./medicine-update.component.scss']
})
export class MedicineUpdateComponent implements OnInit {

  constructor(public pharmacistService: PharmacistService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // Submit form
  onSubmit(form: NgForm){
    console.log(form.value);

    // call Update method
    this.updateMedicine(form);

    // Reset form
    form.reset();
    this.router.navigate(['medicines/list']);
    

  }

  // Update
  updateMedicine(form?: NgForm){
    console.log("Updating...");
    this.pharmacistService.updateMedicine(form.value)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
