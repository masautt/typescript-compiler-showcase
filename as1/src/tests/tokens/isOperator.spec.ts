import { isOperator } from '../../utils/tokens/_exports';
import { TestCase } from '../../types/tests';
import { runTestSuite } from '../_exports';

const isOperatorCases: TestCase[] = [
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
    },
    {
        input: '?',
        output: false,
        isValid: false
    },
    {
        input: '!',
        output: false,
        isValid: false
    }
];

runTestSuite({
    name: 'operator',
    cases: isOperatorCases,
    func: isOperator
});
