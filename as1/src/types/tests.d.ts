export interface TestCase {
    input: any;
    output: any;
    isValid: boolean;
}

export interface TestSuite {
    name: string;
    cases: TestCase[];
    func: TestFunc;
}

interface TestFunc {
    (input: any): any;
}
