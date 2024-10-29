import { Injectable } from '@angular/core';
import { MedicineMaster } from '../shared/medicine-master';
import { MedicinePrescription } from '../shared/medicine-prescription';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MedicinePrescriptionDto } from '../shared/medicine-prescription-dto';

@Injectable({
  providedIn: 'root'
})
export class PharmacistService {

  // declare variables - global variable
  medicineMaster : MedicineMaster = new MedicineMaster();
  medicineMasters : MedicineMaster[];
  medicinePrescription : MedicinePrescription = new MedicinePrescription();
  medicinePrescriptions : MedicinePrescription[];
  medicinePrescriptiondto : MedicinePrescriptionDto = new MedicinePrescriptionDto();
  medicinePrescriptionsdto : MedicinePrescriptionDto[];

  // HttpClientModule
  constructor(private httpClient: HttpClient) { } // get/post/put/delete

  // 1. Get All Medicines - Promises
  getAllMedicines(): void{
    this.httpClient.get(environment.apiUrl + '/api/medicines')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.medicineMasters = response as MedicineMaster[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // 2. Get All Medicines - observable types
  getAllMedicinesList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/Medicines');
  }

  // 3. Insert
  insertMedicine(medicineMaster: MedicineMaster): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/medicines',medicineMaster);
  }

  // 4. Update
  updateMedicine(medicineMaster: MedicineMaster): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/medicines/' + medicineMaster.medicineId,medicineMaster);
  }

  // 5. Get All Medicine Prescriptions - Promises
  getAllMedicinePrescriptions(): void{
    this.httpClient.get(environment.apiUrl + '/api/medicines/prescriptions/details')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.medicinePrescriptions = response as MedicinePrescription[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // 6. Get All Medicine Prescriptions - Obserrvable types
  getAllMedicinePrescriptionsList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl+ '/api/Medicines/prescriptions/details');
  }

  // 7. Get Details of the Prescription
  getMedicinePrescriptionsByPatientAndAppointment(patientName: string, appointmentId: number): Observable<MedicinePrescriptionDto[]> {
    return this.httpClient.get<MedicinePrescriptionDto[]>(
      `${environment.apiUrl}/api/medicines/appointments/appointmentId=${appointmentId}`
    );
  }


}
