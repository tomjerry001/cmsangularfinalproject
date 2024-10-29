import { Role } from "./role";
export class Staff {
    StaffId: number = 0;
    FirstName: string = '';
    LastName: string = '';
    Gender: string = '';
    JoiningDate: Date = new Date();
    Salary: number = 0;
    Experience: number = 0;
    PhoneNumber: string = '';
    Email: string = '';
    Qualification?: string;
    Address?: string;
    Inservice? : boolean=false;
    RoleId: number = 0;

    //Object Oriented model
   Role: Role=new Role();
    


}
