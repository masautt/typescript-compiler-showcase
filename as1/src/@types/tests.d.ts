export interface TestCase {
    input: any;
    output: any;
    valid: boolean;
}

export interface TestSuite {
    name: string;
    cases: TestCase[];
    func: TestFunc;
}

interface TestFunc {
    (str: string): boolean;
}
