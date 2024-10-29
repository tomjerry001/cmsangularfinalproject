import { Appointment } from './appointment';
import { Specialization } from './specialization';
import { Staff } from './staff';
import { TestBillSummary } from './test-bill-summary';
import { TestReport } from './test-report';

export class Doctor {
    DoctorId: number = 0;
    DoctorName: string = '';
    ConsultationFee: number = 0; // Use number for decimal
    StaffId: number = 0;
    SpecializationId: number = 0;

    // Object Oriented Model
    Specialization: Specialization = new Specialization();
    Staff: Staff = new Staff();

    // Collections
    Appointments: Appointment[] = [];
    TestBillSummaries: TestBillSummary[] = [];
    TestReports: TestReport[] = [];
}
