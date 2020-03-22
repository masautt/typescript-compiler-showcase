import { TestSuite } from '../types/tests';

export const runTestSuites = (suites: TestSuite[]): void =>
    suites.forEach((suite: TestSuite) => runTestSuite(suite));

export const runTestSuite = (suite: TestSuite): void => {
    describe(`Testing VALID [${suite.name}s] with ${suite.func.name}`, () =>
        suite.cases
            .filter((i) => i.isValid === true)
            .forEach((i) =>
                test(`${i.input} => ${i.output}`, () =>
                    expect(suite.func(i.input)).toStrictEqual(i.output))
            ));
    describe(`Testing INVALID [${suite.name}s] with ${suite.func.name}`, () =>
        suite.cases
            .filter((i) => i.isValid === false)
            .forEach((i) =>
                test(`${i.input} => ${i.output}`, () =>
                    expect(suite.func(i.input)).toStrictEqual(i.output))
            ));
};
