import { isValidIdentifier } from '../../../../utils/tokens/identifiers';
import { TestCase, TestSuite } from '../../../../@types/tests';

const isValidIdentifierCases: TestCase[] = [
    {
        input: 'num',
        output: true,
        valid: true
    },
    {
        input: 'num1',
        output: true,
        valid: true
    },
    {
        input: 'num$',
        output: true,
        valid: true
    },
    {
        input: 'n1um$',
        output: true,
        valid: true
    },
    {
        input: 'n1um$$',
        output: true,
        valid: true
    },
    {
        input: 'n$1um$$',
        output: true,
        valid: true
    },
    {
        input: '1num',
        output: false,
        valid: false
    },
    {
        input: '$num',
        output: false,
        valid: false
    },
    {
        input: '',
        output: false,
        valid: false
    },
    {
        input: ' ',
        output: false,
        valid: false
    },
    {
        input: '$',
        output: false,
        valid: false
    },
    {
        input: '1',
        output: false,
        valid: false
    },
    {
        input: '*',
        output: false,
        valid: false
    }
];

export const isValidIdentifierSuite: TestSuite = {
    name: 'identifier',
    cases: isValidIdentifierCases,
    func: isValidIdentifier
};
