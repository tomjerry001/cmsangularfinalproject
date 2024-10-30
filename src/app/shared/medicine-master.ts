import { Prescription } from './prescription';
export class MedicineMaster {
    medicineId: number=0;
    medicineName: string;
    genericName: string;
    manufacturerName: string;
    manufacturingDate: string;
    expiryDate: Date = new Date;
    category: string;
    quantity: number=0;
    pricePerUnit: number=0;
    dosage: number=0;


    Prescriptions: Prescription[] = [];
}
    // export class MedicineMaster {
//     MedicineId: number = 0;
//     MedicineName: string = '';
//     GenericName?: string; // Optional property
//     ManufacturerName: string = '';
//     ManufacturingDate: Date = new Date(); // Represents the DateOnly type
//     ExpiryDate: Date = new Date(); // Represents the DateOnly type
//     Category?: string; // Optional property
//     Quantity: number = 0;
//     PricePerUnit: number = 0; // Use number for decimal
//     Dosage?: number; // Optional property

    // Collections


