import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacistService } from 'src/app/services/pharmacist.service';
import { MedicinePrescription } from 'src/app/shared/medicine-prescription';
import { MedicinePrescriptionDto } from 'src/app/shared/medicine-prescription-dto';

@Component({
  selector: 'app-medicine-prescription-list',
  templateUrl: './medicine-prescription-list.component.html',
  styleUrls: ['./medicine-prescription-list.component.scss']
})
export class MedicinePrescriptionListComponent implements OnInit {
  searchTerm: string = '';
  page: number = 1;
  filteredMedicinePrescriptions: MedicinePrescription[] = [];

  // inject service and router
  constructor(public pharmacistService: PharmacistService,
    private router:Router
  ) { }

  // LifeCycle Hook
  ngOnInit(): void {
    console.log("Hi, I am Medicine Prescription List Component");

    // Fetch all medicine prescriptions
    this.pharmacistService.getAllMedicinePrescriptionsList().subscribe(
      (data: MedicinePrescription[]) => {
        this.pharmacistService.medicinePrescriptions = data;
        this.filteredMedicinePrescriptions = data; // Set initially to display all medicines
        console.log(data);
        console.log(this.filteredMedicinePrescriptions);
      },
      (error) => {
        console.log('Error fetching medicine prescriptions', error);
      }
    );
  }

  // Method to filter medicines based on searchTerm
  filterMedicinePrescriptions(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredMedicinePrescriptions = this.pharmacistService.medicinePrescriptions.filter(
      medicinePrescription =>
        medicinePrescription.patientName.toLowerCase().includes(term)
    );
  }

  //details of the medicine
  getMedicinePrescriptionsByPatientAndAppointment(medicinePrescriptionsdto: MedicinePrescriptionDto):void {
    console.log(medicinePrescriptionsdto);
    this.pharmacistService.medicinePrescriptiondto = Object.assign({},medicinePrescriptionsdto);
    this.router.navigate(['/medicines/details/',medicinePrescriptionsdto.appointmentId]);

  }


}