import { Specialization } from "./specialization";
import { Staff } from "./staff";

export class Doctor {
    DoctorId: number = 0;
    DoctorName: string = '';
    ConsultationFee: number = 0;
    StaffId: number = 0;
    SpecializationId: number = 0;

    //Object Oriented model
    Specialization: Specialization=new Specialization();
    Staff: Staff=new Staff();



// export class Doctor {
//     doctorId:number=0;
//     doctorName:string;
//     consultationFee:number=0;
//     specializationId:number=0;

    
//     Specialization: Specialization = new Specialization();
}


