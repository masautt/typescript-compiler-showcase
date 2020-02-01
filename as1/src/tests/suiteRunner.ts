import { TestSuite } from '../@types/tests';

export const runTestSuites = (suites: TestSuite[]) => {
    suites.forEach((suite: TestSuite) => {
        describe(`Testing VALID [${suite.name}s]`, () =>
            suite.cases
                .filter((i) => i.expected === true)
                .forEach((i) =>
                    test(`${i.value} => ${i.expected}`, () =>
                        expect(suite.func(i.value)).toBe(i.expected))
                ));
        describe(`Testing INVALID [${suite.name}s]`, () =>
            suite.cases
                .filter((i) => i.expected === true)
                .forEach((i) =>
                    test(`${i.value} => ${i.expected}`, () =>
                        expect(suite.func(i.value)).toBe(i.expected))
                ));
    });
};
