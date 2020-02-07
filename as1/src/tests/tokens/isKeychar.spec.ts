import { isKeychar } from '../../utils/tokens/_exports';
import { TestCase } from '../../@types/tests';
import { runTestSuite } from '../_exports';

const isKeycharCases: TestCase[] = [
    {
        input: '*',
        output: true,
        isValid: true
    },
    {
        input: '+',
        output: true,
        isValid: true
    },
    {
        input: '-',
        output: true,
        isValid: true
    },
    {
        input: '=',
        output: true,
        isValid: true
    },
    {
        input: '/',
        output: true,
        isValid: true
    },
    {
        input: '>',
        output: true,
        isValid: true
    },
    {
        input: '<',
        output: true,
        isValid: true
    },
    {
        input: '%',
        output: true,
        isValid: true
    }
];

runTestSuite({
    name: 'operator',
    cases: isKeycharCases,
    func: isKeychar
});
