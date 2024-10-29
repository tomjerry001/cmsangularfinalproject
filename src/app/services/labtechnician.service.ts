import { Injectable } from '@angular/core';
import { TestMaster } from '../shared/test-master';
import { TestPrescription } from '../shared/test-prescription';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabtechnicianService {
  // declare variables - global variable
  testMaster : TestMaster = new TestMaster();
  testMasters : TestMaster[];
  testPrescription : TestPrescription = new TestPrescription();
  testPrescriptions : TestPrescription[];

  //HttpClientModule
  constructor(private httpClient: HttpClient) { }  // get,post,put ,delete

  // 1. Get All Tests - Promises
  getAllTests(): void{
    this.httpClient.get(environment.apiUrl + '/api/tests')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.testMasters = response as TestMaster[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // 2. Get All Tests - observable types
  getAllTestsList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/api/tests');
  }

  // 3. Insert
  insertTest(testMaster: TestMaster): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/tests',testMaster);
  }

  // 4. Update
  updateTest(testMaster: TestMaster): Observable<any> {
    
    return this.httpClient.put(environment.apiUrl + '/api/Tests/' + testMaster.testId,testMaster);

  }

   // 5. Get All Test Prescriptions - Promises
   getAllTestPrescriptions(): void{
    this.httpClient.get(environment.apiUrl + '/api/tests/prescriptions/details')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.testPrescriptions = response as TestPrescription[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // 6. Get All Test Prescriptions - Obserrvable types
  getAllTestPrescriptionsList(): Observable<any> {
    return this.httpClient.get(environment.apiUrl+ '/api/tests/prescriptions/details');
  }





}
