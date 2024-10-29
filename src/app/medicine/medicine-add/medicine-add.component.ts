import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PharmacistService } from 'src/app/services/pharmacist.service';


@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.scss']
})
export class MedicineAddComponent implements OnInit {
  


  constructor(public pharmacistService: PharmacistService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

   // Submit form
   onSubmit(form: NgForm){
    console.log(form.value);

    // call Insert method
    this.addMedicine(form);

    // Reset form
    form.reset();

    // Redirect to list
    this.router.navigate(['/medicines/list']);

  }

  // Insert
  addMedicine(form?: NgForm){
    console.log("Inserting...");
    this.pharmacistService.insertMedicine(form.value)
    .subscribe(
      (response) => {
        console.log(response);
        //this.toastr.success('Record has been inserted successfully','CMSv2024');
        this.pharmacistService.getAllMedicines();
      },
      (error) => {
        console.log(error);
        //this.toastr.error('Oops! Something wrong, try again','CMSv2024');
      }
    );
  }

}
