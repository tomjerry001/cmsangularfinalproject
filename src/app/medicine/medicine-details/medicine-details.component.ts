/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.scss']
})
export class MedicineDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component, OnInit, Input } from '@angular/core';
import { PharmacistService } from 'src/app/services/pharmacist.service';
import { MedicinePrescriptionDto } from 'src/app/shared/medicine-prescription-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.scss']
})
export class MedicineDetailsComponent implements OnInit {

  @Input() patientName: string = ''; // Patient's name, received from parent component or route
  @Input() appointmentId: number = 0; // Appointment ID, received from parent component or route
  medicinePrescriptionsdto: MedicinePrescriptionDto[] = []; // List to store the patient's prescription details

  constructor(
    private pharmacistService: PharmacistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Retrieve patientName and appointmentId from route parameters if available
    this.route.params.subscribe(params => {
      this.patientName = params['patientName'] || this.patientName;
      this.appointmentId = +params['appointmentId'] || this.appointmentId;
    });

    if (this.patientName && this.appointmentId) {
      this.getMedicinePrescriptions();
    }
  }

  // Method to fetch prescriptions based on patientName and appointmentId
  getMedicinePrescriptions(): void {
    this.pharmacistService.getMedicinePrescriptionsByPatientAndAppointment(this.patientName, this.appointmentId)
      .subscribe(
        (data: MedicinePrescriptionDto[]) => {
          this.medicinePrescriptionsdto = data;
        },
        (error) => {
          console.error("Error fetching prescriptions:", error);
        }
      );
  }
}




