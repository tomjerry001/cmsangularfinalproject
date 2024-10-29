import { Appointment } from './appointment';

export class MedicineBillSummary {
    MedicineBillId: number = 0;
    AppointmentId: number = 0;
    TotalAmount: number = 0; // Use number for decimal
    DateOfBill: Date = new Date(); // Represents the DateOnly type

    // Object Oriented Model
    Appointment: Appointment = new Appointment();
}
