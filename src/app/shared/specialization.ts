import { Doctor } from './doctor';

export class Specialization {
    SpecializationId: number = 0;
    SpecializationName: string = '';
    
    // Collection of related Doctors
    Doctors: Doctor[] = [];

    constructor(specializationId?: number, specializationName?: string) {
        if (specializationId) this.SpecializationId = specializationId;
        if (specializationName) this.SpecializationName = specializationName;
    }
}
