export interface TestCase {
    value: string;
    expected: boolean;
}

export interface TestSuite {
    name: string;
    cases: TestCase[];
    func: TestFunc;
}

interface TestFunc {
    (str: string): boolean;
}
