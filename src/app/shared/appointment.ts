import { Doctor } from './doctor';
import { Patient } from './patient';
import { MedicineBillSummary } from './medicine-bill-summary';
import { MedicinePrescription } from './medicine-prescription';
import { Prescription } from './prescription';
import { TestPrescription } from './test-prescription';

export class Appointment {
    AppointmentId: number ;
    PatientId: number ;
    DoctorId: number ;
    TokenNumber: string ;
    ConsultationStatus: boolean ;
    DateAndTime: string
    TotalAmount: string ;
    patientDetails?: Patient; // Optional field to hold fetched patient data

    // // Object Oriented Model
    // Doctor: Doctor = new Doctor();
    // Patient: Patient = new Patient();

    // // Ignore in JSON serialization (if needed)
    // MedicineBillSummaries: MedicineBillSummary[] = [];
    // MedicinePrescriptions: MedicinePrescription[] = [];
    // Prescriptions: Prescription[] = [];
    // TestPrescriptions: TestPrescription[] = [];
}
