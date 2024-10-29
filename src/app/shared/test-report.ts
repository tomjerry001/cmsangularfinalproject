import { Doctor } from './doctor';
import { Patient } from './patient';
import { Staff } from './staff';
import { TestPrescription } from './test-prescription';

export class TestReport {
    TestReportId: number = 0;
    ResultValue: string = '';
    ResultUnit: string = '';
    NormalRange: string = '';
    Status: string = '';
    Notes: string | null = null;
    TestDate: Date = new Date();
    ResultDate: Date = new Date();
    PatientId: number = 0;
    DoctorId: number = 0;
    StaffId: number = 0;
    TestPrescriptionId: number | null = null;

    // Object Oriented Model
    Doctor: Doctor = new Doctor();
    Patient: Patient = new Patient();
    Staff: Staff = new Staff();
    TestPrescription: TestPrescription | null = null;
}
