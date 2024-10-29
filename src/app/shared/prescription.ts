import { Appointment } from './appointment';
import { MedicineMaster } from './medicine-master';
import { MedicinePrescription } from './medicine-prescription';
import { TestMaster } from './test-master';
import { TestBillSummary } from './test-bill-summary';
import { TestPrescription } from './test-prescription';

export class Prescription {
    PrescriptionId: number ;
    Symptoms: string ;
    Diagnosis: string ;
    TreatmentPlan: string ;
    MedicineId: number ;
    AppointmentId: number ;
    TestId: number ;

    // Object Oriented Model
    Appointment: Appointment = new Appointment();
    Medicine: MedicineMaster = new MedicineMaster();
    Test: TestMaster = new TestMaster();

    // Collections
    MedicinePrescriptions: MedicinePrescription[] = [];
    TestBillSummaries: TestBillSummary[] = [];
    TestPrescriptions: TestPrescription[] = [];
}
