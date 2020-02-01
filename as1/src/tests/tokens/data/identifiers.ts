import { isValidIdentifier } from '../../../tokens/identifiers';
import { TestCase, TestSuite } from '../../../@types/tests';

const identifiers: TestCase[] = [
    {
        value: 'num',
        expected: true
    },
    {
        value: 'num1',
        expected: true
    },
    {
        value: 'num$',
        expected: true
    },
    {
        value: 'n1um$',
        expected: true
    },
    {
        value: 'n1um$$',
        expected: true
    },
    {
        value: 'n$1um$$',
        expected: true
    },
    {
        value: '1num',
        expected: false
    },
    {
        value: '$num',
        expected: false
    },
    {
        value: '',
        expected: false
    },
    {
        value: ' ',
        expected: false
    },
    {
        value: '$',
        expected: false
    },
    {
        value: '1',
        expected: false
    },
    {
        value: '*',
        expected: false
    }
];

export const identifierSuite: TestSuite = {
    name: 'identifier',
    cases: identifiers,
    func: isValidIdentifier
};
