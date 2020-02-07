import { isOperator } from '../../../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../../../@types/tests';

const isOperatorCases: TestCase[] = [
    {
        input: '*',
        output: true,
        valid: true
    },
    {
        input: '+',
        output: true,
        valid: true
    },
    {
        input: '-',
        output: true,
        valid: true
    },
    {
        input: '=',
        output: true,
        valid: true
    },
    {
        input: '/',
        output: true,
        valid: true
    },
    {
        input: '>',
        output: true,
        valid: true
    },
    {
        input: '<',
        output: true,
        valid: true
    },
    {
        input: '%',
        output: true,
        valid: true
    },
    {
        input: '?',
        output: false,
        valid: false
    },
    {
        input: '!',
        output: false,
        valid: false
    }
];

export const isOperatorSuite: TestSuite = {
    name: 'operator',
    cases: isOperatorCases,
    func: isOperator
};
