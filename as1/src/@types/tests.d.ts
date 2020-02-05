export interface TestCase {
    input: string;
    output: any;
}

export interface TestSuite {
    name: string;
    cases: TestCase[];
    func: TestFunc;
}

interface TestFunc {
    (str: string): boolean;
}
