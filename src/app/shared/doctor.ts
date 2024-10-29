import { Specialization } from "./specialization";
export class Doctor {
    doctorId:number=0;
    doctorName:string;
    consultationFee:number=0;
    specializationId:number=0;

    
    Specialization: Specialization = new Specialization();
}

