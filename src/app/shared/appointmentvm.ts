export class Appointmentvm {
    AppointmentId: number ;
    PatientName: string ;
    Dob: string; // Date of Birth
    Gender: string ; // Patient Gender
    BloodGroup: string ; // Patient Blood Group
    DoctorId: number ;
    TokenNumber: string ;
    ConsultationStatus: boolean ;
    DateAndTime: string;
    Patient: {
        PatientId: number;
        PatientName: string;
        Dob: Date;
    };

  
}
