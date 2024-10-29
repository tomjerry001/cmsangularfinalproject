export class MedicinePrescriptionDto {
    medicinePrescriptionId: number=0;
    patientName: string;
    quantity: number=0;
    duration: string;
    notes: string;
    medicineName: string;
    manufacturingDate: Date= new Date;
    expiryDate: Date = new Date;
    category: string;
    pricePerUnit: number=0;
    dosage: number=0;
    totalPrice: number=0;
    appointmentId: number=0;
}
