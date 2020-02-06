import { TestSuite } from '../@types/tests';

export const runTestSuites = (suites: TestSuite[]) =>
    suites.forEach((suite: TestSuite) => runTestSuite(suite));

export const runTestSuite = (suite: TestSuite) => {
    describe(`Testing VALID [${suite.name}s] with ${suite.func.name}`, () =>
        suite.cases
            .filter((i) => i.valid === true)
            .forEach((i) =>
                test(`${i.input} => ${i.output}`, () =>
                    expect(suite.func(i.input)).toStrictEqual(i.output))
            ));
    describe(`Testing INVALID [${suite.name}s] with ${suite.func.name}`, () =>
        suite.cases
            .filter((i) => i.valid === false)
            .forEach((i) =>
                test(`${i.input} => ${i.output}`, () =>
                    expect(suite.func(i.input)).toStrictEqual(i.output))
            ));
};
