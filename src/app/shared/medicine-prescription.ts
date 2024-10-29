import { Appointment } from './appointment';
import { Prescription } from './prescription';

export class MedicinePrescription {
    MedicinePrescriptionId: number ;
    AppointmentId: number ;
    Quantity: number ;
    Duration: string ;
    Notes: string;
    PrescriptionId: number ;
    MedicineId: number;

    // Object Oriented Model
    Appointment: Appointment = new Appointment();
    Prescription: Prescription = new Prescription();
}
