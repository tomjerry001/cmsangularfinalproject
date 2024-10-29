import { Appointment } from './appointment';
import { TestBillSummary } from './test-bill-summary';
import { TestReport } from './test-report';

export class Patient {
    PatientId: number = 0;
    PatientName: string = '';
    Dob: Date = new Date(); // Equivalent to `DateOnly` in TypeScript
    Gender: string = '';
    BloodGroup: string = '';
    PhoneNumber: string = '';
    Address: string = '';
    Email: string = '';

    // Object Oriented Model
    Appointments: Appointment[] = [];
    TestBillSummaries: TestBillSummary[] = [];
    TestReports: TestReport[] = [];

export class Patient {
    patientId : number=0;
    patientName: string;
    dob:Date = new Date
    gender:string;
    bloodGroup:string;
    phoneNumber:string;
    address:string;
    email:string;
}
