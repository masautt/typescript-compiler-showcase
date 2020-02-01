import { isOperator } from '../../../tokens/main';
import { TestCase, TestSuite } from '../../../@types/tests';

const operators: TestCase[] = [
    {
        value: '*',
        expected: true
    },
    {
        value: '+',
        expected: true
    },
    {
        value: '-',
        expected: true
    },
    {
        value: '=',
        expected: true
    },
    {
        value: '/',
        expected: true
    },
    {
        value: '>',
        expected: true
    },
    {
        value: '<',
        expected: true
    },
    {
        value: '%',
        expected: true
    },
    {
        value: '?',
        expected: false
    },
    {
        value: '!',
        expected: false
    }
];

export const operatorSuite: TestSuite = {
    name: 'operator',
    cases: operators,
    func: isOperator
};
