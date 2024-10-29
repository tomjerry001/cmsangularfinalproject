import { Prescription } from './prescription';

export class MedicineMaster {
    MedicineId: number = 0;
    MedicineName: string = '';
    GenericName?: string; // Optional property
    ManufacturerName: string = '';
    ManufacturingDate: Date = new Date(); // Represents the DateOnly type
    ExpiryDate: Date = new Date(); // Represents the DateOnly type
    Category?: string; // Optional property
    Quantity: number = 0;
    PricePerUnit: number = 0; // Use number for decimal
    Dosage?: number; // Optional property

    // Collections
    Prescriptions: Prescription[] = [];
}
