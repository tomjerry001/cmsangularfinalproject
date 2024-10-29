import { Injectable } from '@angular/core';
import { Appointment } from '../shared/appointment';
import { Prescription } from '../shared/prescription';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../shared/patient';
import { Appointmentvm } from '../shared/appointmentvm';
import { Prescriptionvm } from '../shared/prescriptionvm';
import { MedicinePrescriptionvm } from '../shared/medicine-prescriptionvm';
import { TestPrescriptionvm } from '../shared/test-prescriptionvm';
import { Doctor } from '../shared/doctor';
import { MedicineMaster } from '../shared/medicine-master';
import { TestMaster } from '../shared/test-master';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  appointmentvm: Appointmentvm = new Appointmentvm();
  appointmentsvm: Appointmentvm[] = [];
  doctor: Doctor = new Doctor();

  //Main Prescription object to insert
  prescriptionvm: Prescriptionvm = new Prescriptionvm();

  //Medicine Prescription object to insert
  medicineprescriptionvm: MedicinePrescriptionvm = new MedicinePrescriptionvm();
  medicines:MedicineMaster[];

  //Test Prescription object to insert
  testprescriptionvm: TestPrescriptionvm = new TestPrescriptionvm();
  tests: TestMaster[] = [];



  constructor(public httpClient: HttpClient) { }
  doctorId = 3001;

  //1. Get Appointments - Observable Types
  getAllAppointmentsList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + 'Doctors/appointment/' + this.doctorId);
  }
  
  getAllMedicines(): void {
    this.httpClient.get(environment.apiUrl + 'Doctors/medicines')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.medicines = response as MedicineMaster[];
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getAllTests(): void {
    this.httpClient.get(environment.apiUrl + 'Doctors/tests')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.tests = response as TestMaster[];
        },
        (error) => {
          console.log(error);
        }
      );
  }
  //2. Insert Prescription
  insertPrescription(prescriptionvm: Prescriptionvm): Observable<any> {
    console.log("Inside Service for insertion...")
    return this.httpClient.post(environment.apiUrl + 'Doctors/Prescription', prescriptionvm);
  }


  //3. Insert Medicine Prescription
  insertMedicinePrescription(medicineprescriptionvm: MedicinePrescriptionvm): Observable<any> {
    console.log("Inside Service for insertion...")
    return this.httpClient.post(environment.apiUrl + 'Doctors/medicine-prescription', medicineprescriptionvm);
  }

  //3. Insert Test Prescription
  insertTestPrescription(testprescriptionvm: TestPrescriptionvm): Observable<any> {
    console.log("Inside Service for insertion...")
    return this.httpClient.post(environment.apiUrl + 'Doctors/test-prescription', testprescriptionvm);
  }
}

