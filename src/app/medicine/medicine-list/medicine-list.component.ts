// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { PharmacistService } from 'src/app/services/pharmacist.service';
// import { MedicineMaster } from 'src/app/shared/medicine-master';

// @Component({
//   selector: 'app-medicine-list',
//   templateUrl: './medicine-list.component.html',
//   styleUrls: ['./medicine-list.component.scss']
// })
// export class MedicineListComponent implements OnInit {

//   searchTerm: string = '';
//   page: number = 1;
//   filteredMedicines: MedicineMaster[] = [];

//   // Inject Service and Router
//   constructor(public pharmacistService: PharmacistService,
//               private router: Router) { }

//   // Lifecycle Hook
//   ngOnInit(): void {
//     console.log("Hi, I am Medicine List Component");

//     // Fetch all medicines
//     this.pharmacistService.getAllMedicinesList().subscribe(
//       (data: MedicineMaster[]) => {
//         this.pharmacistService.medicineMasters = data;
//         this.filteredMedicines = data; // Set initially to display all medicines
//         console.log(data);
//         console.log(this.filteredMedicines);
//       },
//       (error) => {
//         console.log('Error fetching medicines', error);
//       }
//     );
//   }

//   // Method to filter medicines based on searchTerm
//   filterMedicines(): void {
//     const term = this.searchTerm.toLowerCase();
//     this.filteredMedicines = this.pharmacistService.medicineMasters.filter(
//       medicineMaster =>
//         medicineMaster.medicineName.toLowerCase().includes(term)
//     );
//   }

//   // edit medicine
//   updateMedicine(medicineMaster:MedicineMaster): void{
//     console.log(medicineMaster);
//     // keep medicine object in service
//     this.pharmacistService.medicineMaster = Object.assign({},medicineMaster);
//     this.router.navigate(['medicines/edit/',medicineMaster.medicineId]);
//     // localhost:4200/medicines/edit/id
//     // localhost:4200/medicines/edit/4
//   }

//   // delete medicine
//   deleteMedicine(_id:number): void{
//     console.log(_id);
//     if(confirm('Are you sure to DELETE this record?')){
     
//       console.log('Deleting...');
//     }
//   }

//   goBack(): void {
//     window.location.href = 'http://localhost:4200/auth/pharmacist';
// }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacistService } from 'src/app/services/pharmacist.service';
import { MedicineMaster } from 'src/app/shared/medicine-master';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {

  searchTerm: string = '';
  page: number = 1;
  filteredMedicines: MedicineMaster[] = [];

  constructor(public pharmacistService: PharmacistService, private router: Router) { }

  ngOnInit(): void {
    console.log("Hi, I am Medicine List Component");

    this.pharmacistService.getAllMedicinesList().subscribe(
      (data: MedicineMaster[]) => {
        this.pharmacistService.medicineMasters = data;
        this.filteredMedicines = data; // Set initially to display all medicines
        console.log(data);
        console.log(this.filteredMedicines);
      },
      (error) => {
        console.log('Error fetching medicines', error);
      }
    );
  }

  filterMedicines(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredMedicines = this.pharmacistService.medicineMasters.filter(
      medicineMaster =>
        medicineMaster.medicineName.toLowerCase().includes(term) || // Filter by medicine name
        medicineMaster.genericName.toLowerCase().includes(term) // Optionally filter by generic name
    );
    console.log(this.filteredMedicines); // Log filtered results
  }

  updateMedicine(medicineMaster: MedicineMaster): void {
    console.log(medicineMaster);
    this.pharmacistService.medicineMaster = Object.assign({}, medicineMaster);
    this.router.navigate(['medicines/edit/', medicineMaster.medicineId]);
  }

  deleteMedicine(medicineId: number): void {
    console.log(medicineId);
    if (confirm('Are you sure to DELETE this record?')) {
      console.log('Deleting...');
      // Implement delete logic here
    }
  }

  goBack(): void {
    window.location.href = 'http://localhost:4200/auth/pharmacist';
  }
}
