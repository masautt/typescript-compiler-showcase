import { tokenTestSuites } from './tokens/_exports';
import { TestSuite } from '../@types/tests';

const runTestSuites = (suites: TestSuite[]) => {
    suites.forEach((suite: TestSuite) => {
        describe(`Testing VALID [${suite.name}s] with ${suite.func.name}`, () =>
            suite.cases
                .filter((i) => i.expected === true)
                .forEach((i) =>
                    test(`${i.value} => ${i.expected}`, () =>
                        expect(suite.func(i.value)).toBe(i.expected))
                ));
        describe(`Testing INVALID [${suite.name}s] with ${suite.func.name}`, () =>
            suite.cases
                .filter((i) => i.expected === false)
                .forEach((i) =>
                    test(`${i.value} => ${i.expected}`, () =>
                        expect(suite.func(i.value)).toBe(i.expected))
                ));
    });
};

runTestSuites(tokenTestSuites);
