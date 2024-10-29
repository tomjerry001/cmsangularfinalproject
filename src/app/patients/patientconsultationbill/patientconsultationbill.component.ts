import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from '../../services/receptionist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../../shared/appointment';
import { Patient } from '../../shared/patient';

@Component({
  selector: 'app-patientconsultationbill',
  templateUrl: './patientconsultationbill.component.html',
  styleUrls: ['./patientconsultationbill.component.scss']
})
export class PatientconsultationbillComponent implements OnInit {
  appointment: Appointment | null = null;
  patient: Patient | null = null;
  doctorName: string = '';
  specializationName: string = '';

  constructor(
    public receptionistService: ReceptionistService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.appointment = {
        appointmentId: +params['appointmentId'],
        patientId: +params['patientId'],
        doctorId: +params['doctorId'],
        specializationId: +params['specializationId'],
        tokenNumber: params['tokenNumber'],
        consultationStatus: true,
        totalAmount: params['totalAmount'] || '200',
        dateAndTime: params['dateAndTime']
      };

      this.patient = {
        patientId: +params['patientId'],
        patientName: params['patientName'],
        dob: null,
        gender: '',
        bloodGroup: '',
        phoneNumber: '',
        address: '',
        email: ''
      };

      const doctor = this.receptionistService.doctors.find(d => d.doctorId === this.appointment?.doctorId);
      if (doctor) {
        this.doctorName = doctor.doctorName;
        const specialization = this.receptionistService.specials.find(s => s.specializationId === doctor.specializationId);
        this.specializationName = specialization ? specialization.specializationName : 'N/A';
      }
    });
  }

  printBill(): void {
    const printContents = document.getElementById('bill')?.innerHTML;

    // Create a hidden iframe for printing
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);

    // Write the contents to the iframe
    const doc = iframe.contentWindow!.document;
    doc.open();
    doc.write(`
      <html>
        <head>
          <title>Print Bill</title>
          <style>
            body { font-family: Arial, sans-serif; }
            .consultation-bill { margin: 20px; padding: 20px; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9; }
            .bill-details p { font-size: 16px; margin: 5px 0; }
          </style>
        </head>
        <body>
          <div class="consultation-bill">${printContents}</div>
        </body>
      </html>
    `);
    doc.close();

    // Print the iframe content
    iframe.contentWindow!.focus();
    iframe.contentWindow!.print();

    // Cleanup after printing
    iframe.contentWindow!.onafterprint = () => {
      document.body.removeChild(iframe);
      this.router.navigate(['/patients/list']); // Navigate to the patient list page
    };
  }

  goBack(): void {
    this.router.navigate(['/patients/list']); // Navigate to the patient list page
  }
}
