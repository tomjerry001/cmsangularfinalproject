import { Doctor } from './doctor';
import { Patient } from './patient';
import { Prescription } from './prescription';

export class TestBillSummary {
    TestBillId: number = 0;
    PatientId: number = 0;
    DoctorId: number = 0;
    DateOfBill: Date = new Date(); // Use Date object for DateOnly
    GrandTotalAmount: number = 0;
    PrescriptionId?: number; // Optional property

    // Relationships
    Doctor: Doctor = new Doctor();
    Patient: Patient = new Patient();
    Prescription?: Prescription; // Optional relationship

    constructor(
        testBillId?: number,
        patientId?: number,
        doctorId?: number,
        dateOfBill?: Date,
        grandTotalAmount?: number,
        prescriptionId?: number
    ) {
        if (testBillId) this.TestBillId = testBillId;
        if (patientId) this.PatientId = patientId;
        if (doctorId) this.DoctorId = doctorId;
        if (dateOfBill) this.DateOfBill = dateOfBill;
        if (grandTotalAmount) this.GrandTotalAmount = grandTotalAmount;
        if (prescriptionId) this.PrescriptionId = prescriptionId;
    }
}
