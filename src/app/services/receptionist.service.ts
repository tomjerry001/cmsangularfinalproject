import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Patient } from '../shared/patient';
import { Doctor } from '../shared/doctor';
import { Specialization } from '../shared/specialization';
import { Appointment } from '../shared/appointment';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {
  patient: Patient = new Patient();
  patients: Patient[] = [];
  doctor: Doctor = new Doctor();
  doctors: Doctor[] = [];
  special: Specialization = new Specialization();
  specials: Specialization[] = [];
  appointmentViewModel: Appointment = new Appointment();

  constructor(private httpClient: HttpClient) { }

  // Retrieve all patients and store them in the patients array
  getAllPatientss(): void {
    this.httpClient.get<Patient[]>(`${environment.apiUrl}Patient`)
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.patients = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // Observable version to get the patients list
  getAllPatientsList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'Patient');
  }

  // Add a new patient
  addPatient(employee: Patient): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'Patient', employee);
  }

  // Retrieve all specializations and store them in the specials array
  getAllSpecializations(): void {
    this.httpClient.get<Specialization[]>(`${environment.apiUrl}Patient/specializations`)
      .subscribe(
        response => {
          this.specials = response;
          console.log(this.specials);
        },
        error => {
          console.error(error);
        }
      );
  }

  // Retrieve doctors by specialization
  getDoctorsBySpecialization(specializationId: number): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${environment.apiUrl}Patient/doctors/${specializationId}`);
  }

  // Generate token number based on doctor ID
  generateTokenNumber(doctorId: number): Observable<string> {
    return this.httpClient.get<string>(`${environment.apiUrl}Patient/nextToken/${doctorId}`);
  }

  // Book an appointment with token number and formatted date
  addAppointment(appointment: Appointment): Observable<any> {


    return this.httpClient.post(`${environment.apiUrl}Patient/book`, appointment)
    // Ensure `dateAndTime` is correctly formatted as `YYYY-MM-DD HH:mm:ss`
    // const dateObj = new Date(appointmentData.dateAndTime);
    // appointmentData.dateAndTime = dateObj.toISOString().slice(0, 19).replace('T', ' ');

    // return this.generateTokenNumber(appointmentData.doctorId).pipe(
    //   switchMap(tokenNumber => {
    //     // Set token number and proceed with the appointment booking
    //     appointmentData.tokenNumber = tokenNumber;

    //     console.log('Appointment data after token generation:', appointmentData);

    //     // Send the appointment data to the backend
    //     return this.httpClient.post(`${environment.apiUrl}/api/Patient/book`, appointmentData);
    //   })
    // );
  }

  // New method to retrieve a patient by ID
  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${environment.apiUrl}Patient/${id}`);
  }

  // New method to update patient details
  updatePatient(patient: Patient): Observable<void> {
    return this.httpClient.put<void>(`${environment.apiUrl}Patient/${patient.PatientId}`, patient);
  }
}
