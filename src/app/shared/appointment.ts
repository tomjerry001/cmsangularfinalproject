import { Doctor } from './doctor';
import { Patient } from './patient';
import { MedicineBillSummary } from './medicine-bill-summary';
import { MedicinePrescription } from './medicine-prescription';
import { Prescription } from './prescription';
import { TestPrescription } from './test-prescription';

export class Appointment {

    // AppointmentId: number ;
    // PatientId: number ;
    // DoctorId: number ;
    // TokenNumber: string ;
    // ConsultationStatus: boolean ;
    // DateAndTime: string
    // TotalAmount: string ;
    // patientDetails?: Patient; // Optional field to hold fetched patient data

  
  appointmentId:number=0;
  patientId: number;
  doctorId: number;
  specializationId?: number; // Optional
  dateAndTime: string;       // Should be formatted correctly
  tokenNumber?: string;      // Optional, set by the backend
  consultationStatus: boolean = false; // Default status
  totalAmount: string = '200';        // Default as string to match backend type

}
