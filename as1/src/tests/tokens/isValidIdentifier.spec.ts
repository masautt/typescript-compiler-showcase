import { isValidIdentifier } from '../../utils/tokens/_exports';
import { TestCase } from '../../types/tests';
import { runTestSuite } from '../_exports';

const isValidIdentifierCases: TestCase[] = [
    {
        input: 'num',
        output: true,
        isValid: true
    },
    {
        input: 'num1',
        output: true,
        isValid: true
    },
    {
        input: 'num$',
        output: true,
        isValid: true
    },
    {
        input: 'n1um$',
        output: true,
        isValid: true
    },
    {
        input: 'n1um$$',
        output: true,
        isValid: true
    },
    {
        input: 'n$1um$$',
        output: true,
        isValid: true
    },
    {
        input: '1num',
        output: false,
        isValid: false
    },
    {
        input: '$num',
        output: false,
        isValid: false
    },
    {
        input: '',
        output: false,
        isValid: false
    },
    {
        input: ' ',
        output: false,
        isValid: false
    },
    {
        input: '$',
        output: false,
        isValid: false
    },
    {
        input: '1',
        output: false,
        isValid: false
    },
    {
        input: '*',
        output: false,
        isValid: false
    }
];

runTestSuite({
    name: 'identifier',
    cases: isValidIdentifierCases,
    func: isValidIdentifier
});
