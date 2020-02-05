import { isValidIdentifier } from '../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../@types/tests';

const isValidIdentifierCases: TestCase[] = [
    {
        input: 'num',
        output: true
    },
    {
        input: 'num1',
        output: true
    },
    {
        input: 'num$',
        output: true
    },
    {
        input: 'n1um$',
        output: true
    },
    {
        input: 'n1um$$',
        output: true
    },
    {
        input: 'n$1um$$',
        output: true
    },
    {
        input: '1num',
        output: false
    },
    {
        input: '$num',
        output: false
    },
    {
        input: '',
        output: false
    },
    {
        input: ' ',
        output: false
    },
    {
        input: '$',
        output: false
    },
    {
        input: '1',
        output: false
    },
    {
        input: '*',
        output: false
    }
];

export const isValidIdentifierSuite: TestSuite = {
    name: 'identifier',
    cases: isValidIdentifierCases,
    func: isValidIdentifier
};
