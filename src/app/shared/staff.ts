import { Doctor } from './doctor';
import { Login } from './login';
import { Role } from './role';
import { TestReport } from './test-report';

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
    Inservice?: boolean;
    RoleId: number = 0;

    // Collections for related entities
    Doctors: Doctor[] = [];
    Logins: Login[] = [];
    Role: Role = new Role();
    TestReports: TestReport[] = [];

    constructor(
        staffId?: number,
        firstName?: string,
        lastName?: string,
        gender?: string,
        joiningDate?: Date,
        salary?: number,
        experience?: number,
        phoneNumber?: string,
        email?: string,
        qualification?: string,
        address?: string,
        inservice?: boolean,
        roleId?: number
    ) {
        if (staffId) this.StaffId = staffId;
        if (firstName) this.FirstName = firstName;
        if (lastName) this.LastName = lastName;
        if (gender) this.Gender = gender;
        if (joiningDate) this.JoiningDate = joiningDate;
        if (salary) this.Salary = salary;
        if (experience) this.Experience = experience;
        if (phoneNumber) this.PhoneNumber = phoneNumber;
        if (email) this.Email = email;
        if (qualification) this.Qualification = qualification;
        if (address) this.Address = address;
        if (inservice) this.Inservice = inservice;
        if (roleId) this.RoleId = roleId;
    }
}
