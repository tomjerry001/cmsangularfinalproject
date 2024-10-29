import { Injectable } from '@angular/core';
import { Staff } from '../shared/staff';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Role } from '../shared/role';
import { Doctor } from '../shared/doctor';
import { Specialization } from '../shared/specialization';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // Global variables
  staff: Staff = new Staff();
  staffs: Staff[] = [];
   //list of roles
   roles: Role[];
   doctor: Doctor = new Doctor();
   doctors: Doctor[];
   specialization: Specialization[];

  // Inject HttpClient for API requests
  constructor(private httpClient: HttpClient) { }

  // 1 - Create: Insert a new staff (POST)
  insertStaff(staff: Staff): Observable<any>{
    return this.httpClient.post(environment.apiUrl + 'Admins/addstaff', staff);
  }

  // 2 - Read: Get all staff (GET) - Observable
  getAllStaffsList(): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>(environment.apiUrl + 'Admins/getallstaff');
  }

  // 3 - Read: Get a specific staff by ID (GET)
  getStaffById(staffId: number): Observable<Staff> {
    return this.httpClient.get<Staff>(environment.apiUrl + 'Admins/getallstaff/${staffId}');
  }

  // 4 - Update: Update staff information (PUT)
  updateStaff(staff: Staff): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'Admins/UpdateStaff/'+ staff.StaffId,staff);
  }

  // 5 - Delete: Remove a staff by ID (DELETE)
  deleteStaff(staffId: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + 'Admins/deletestaff/${StaffId}');
  }
//6 Get all Roles
    getAllRoles(): void{
      this.httpClient.get(environment.apiUrl+'Admins/getallroles')
      .toPromise()
      .then(
        (response)=>{
          console.log(response);
          this.roles=response as Role[];
        },
        (error)=>{
          console.log(error);
        }
      );
    }
     // 7 - Create: Insert a new doctor (POST)
  insertDoctor(staff: Doctor): Observable<any>{
    return this.httpClient.post(environment.apiUrl + 'Admins/adddoctor', staff);
  }
  //8 Get all Roles
  getAllSpecializations(): void{
    this.httpClient.get(environment.apiUrl+'Admins/getallspecializations')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.specialization=response as Specialization[];
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  
}