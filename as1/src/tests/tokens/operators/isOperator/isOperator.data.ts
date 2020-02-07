import { isOperator } from '../../../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../../../@types/tests';

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

export const isOperatorSuite: TestSuite = {
    name: 'operator',
    cases: isOperatorCases,
    func: isOperator
};
