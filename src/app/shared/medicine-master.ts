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
}
