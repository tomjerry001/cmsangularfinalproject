import { Appointment } from './appointment';
import { Prescription } from './prescription';
import { TestReport } from './test-report';

export class TestPrescription {
    TestPrescriptionId: number ;
    AppointmentId: number ;
    Notes: string ;
    PrescriptionId: number;
    TestId: number;

    // Object Oriented Model
    Appointment: Appointment = new Appointment();
    Prescription: Prescription = new Prescription();

    // Collections
    TestReports: TestReport[] = [];
}
