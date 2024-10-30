import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ReceptionistService } from 'src/app/services/receptionist.service';

@Component({
  selector: 'app-patient-book-appointment',
  templateUrl: './patient-bookappointment.component.html',
  styleUrls: ['./patient-bookappointment.component.scss']
})
export class PatientBookAppointmentComponent implements OnInit {
  selectedSpecializationId: number;
  today: string;
  tomorrow: string;

  constructor(
    public receptionistService: ReceptionistService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const now = new Date();
    const todayDate = now.toISOString().split('T')[0];
    now.setDate(now.getDate() + 1);
    const tomorrowDate = now.toISOString().split('T')[0];

    this.today = todayDate;
    this.tomorrow = tomorrowDate;
    this.receptionistService.getAllSpecializations();
    this.route.params.subscribe(params => {
      const patientId = params['PatientId'];
      if (patientId) {
        this.receptionistService.appointmentViewModel.patientId = +patientId;
        this.receptionistService.getPatientById(this.receptionistService.appointmentViewModel.patientId).subscribe(patient => {
          this.receptionistService.patient = patient;
        });
      }
    });
  }

  onSpecializationChange(event: any): void {
    const specializationId = +event.target.value;
    this.selectedSpecializationId = specializationId;
    if (specializationId && specializationId !== 0) {
      this.receptionistService.getDoctorsBySpecialization(specializationId).subscribe(
        doctors => {
          this.receptionistService.doctors = doctors;
        },
        error => {
          console.error('Error fetching doctors by specialization', error);
          this.toastr.error('Could not fetch doctors, please try again later.');
        }
      );
    }
  }

  isValidDate(date: string): boolean {
    return date === this.today || date === this.tomorrow;
  }

  onSubmit(form: NgForm): void {
    console.log('Form Submitted:', form.value);
    const appointmentDate = new Date(this.receptionistService.appointmentViewModel.dateAndTime).toISOString().split('T')[0];
    if (form.valid && this.isValidDate(appointmentDate)) {
     // console.log(form);
      this.addAppointment(form);
    } else {
      this.toastr.error('Please select a valid date (today or tomorrow).');
    }
  }

  addAppointment(form: NgForm) {
    this.receptionistService.addAppointment(form.value).subscribe(
      (response) => {
     
        this.toastr.success('Appointment booked successfully');
        const formattedDateAndTime = new Date(form.value.dateAndTime).toISOString();
        this.router.navigate(['/patients/patientconsultationbill'], {
          queryParams: {
            PatientId: response.PatientId,
            AppointmentId: response.AppointmentId,
            DateAndTime: formattedDateAndTime,
            DoctorId: form.value.DoctorId,
            SpecializationId: form.value.SpecializationId,
            TokenNumber: response.TokenNumber,
            TotalAmount: response.TotalAmount,
            patientName: this.receptionistService.patient?.PatientName

          }
        });
      },
      (error) => {
        console.error(error);
        this.toastr.error("An error occurred while booking the appointment.");
      }
    );
  }
}