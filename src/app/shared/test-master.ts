import { Prescription } from './prescription';

export class TestMaster {
    TestId: number = 0;
    TestName: string = '';
    TestType?: string; // Optional property
    Amount: number = 0;

    // Relationships
    Prescriptions: Prescription[] = [];

    constructor(
        testId?: number,
        testName?: string,
        testType?: string,
        amount?: number
    ) {
        if (testId) this.TestId = testId;
        if (testName) this.TestName = testName;
        if (testType) this.TestType = testType;
        if (amount) this.Amount = amount;
    }
}
