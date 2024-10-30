import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from '../../services/receptionist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../../shared/appointment';
import { Patient } from '../../shared/patient';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
        doctorId: +params['DoctorId'],
        specializationId: +params['SpecializationId'],
        tokenNumber: params['TokenNumber'],
        consultationStatus: true,
        totalAmount: params['totalAmount'] || '200',
        dateAndTime: params['dateAndTime']
      };

      this.patient = {
        PatientId: +params['patientId'],
        PatientName: params['patientName'],
        Dob: null,
        Gender: '',
        BloodGroup: '',
        PhoneNumber: '',
        Address: '',
        Email: '',
        Appointments: [],
        TestBillSummaries: [],
        TestReports: []
      };

      const doctor = this.receptionistService.doctors.find(d => d.DoctorId === this.appointment?.doctorId);
      if (doctor) {
        this.doctorName = doctor.DoctorName;
        const specialization = this.receptionistService.specials.find(s => s.SpecializationId === doctor.SpecializationId);
        this.specializationName = specialization ? specialization.SpecializationName : 'N/A';
      }
    });
  }

  printBill(): void {
    const content = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="text-align: center; color: #4c8bf5; font-size: 24px; margin-bottom: 10px;">Prime Care Hospital</h2>
        <h3 style="text-align: center; font-size: 20px; margin-top: 0; color: #333;">Patient Consultation Bill</h3>
        
        <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <div style="font-size: 16px; line-height: 1.6;">
          <p><strong>Patient Name:</strong> ${this.patient?.PatientName}</p>
          <p><strong>Doctor Name:</strong> ${this.doctorName}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
          <p><strong>Specialization:</strong> ${this.specializationName}</p>
          <p><strong>Token Number:</strong> ${this.appointment?.tokenNumber}</p>
        </div>

        <h4 style="color: #4c8bf5; font-size: 18px; margin-top: 20px; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Charges</h4>

        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
          <tr style="background-color: #f9f9f9;">
            <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold; width: 70%;">Total Amount</td>
            <td style="border: 1px solid #ddd; padding: 10px; text-align: right; font-weight: bold;">${this.appointment?.totalAmount}</td>
          </tr>
        </table>

        <p style="text-align: center; margin-top: 30px; color: #555;">Thank you for choosing Prime Care Hospital! We wish you a speedy recovery.</p>
      </div>
    `;

    const element = document.createElement('div');
    element.innerHTML = content;
    document.body.appendChild(element); // Append temporarily to body

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF();
      doc.addImage(imgData, 'PNG', 10, 10, 190, 0); // Add image to PDF
      doc.save(`Invoice_${this.appointment?.appointmentId}.pdf`);
      document.body.removeChild(element); // Clean up
    });
  }

  goBack(): void {
    this.router.navigate(['/patients/list']); // Navigate to the patient list page
  }
}
