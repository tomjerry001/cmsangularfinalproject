export class Appointment {
  appointmentId:number=0;
  patientId: number;
  doctorId: number;
  specializationId?: number; // Optional
  dateAndTime: string;       // Should be formatted correctly
  tokenNumber?: string;      // Optional, set by the backend
  consultationStatus: boolean = true; // Default status
  totalAmount: string = '200';        // Default as string to match backend type
}
