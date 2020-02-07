import { isSeparator } from '../../utils/tokens/_exports';
import { TestCase } from '../../@types/tests';
import { runTestSuite } from '../_exports';

const isSeparatorCases: TestCase[] = [
    {
        input: "'",
        output: true,
        isValid: true
    },
    {
        input: '(',
        output: true,
        isValid: true
    },
    {
        input: ')',
        output: true,
        isValid: true
    },
    {
        input: '{',
        output: true,
        isValid: true
    },
    {
        input: '}',
        output: true,
        isValid: true
    },
    {
        input: '[',
        output: true,
        isValid: true
    },
    {
        input: ']',
        output: true,
        isValid: true
    },
    {
        input: ',',
        output: true,
        isValid: true
    },
    {
        input: '.',
        output: true,
        isValid: true
    },
    {
        input: ':',
        output: true,
        isValid: true
    },
    {
        input: ';',
        output: true,
        isValid: true
    },
    {
        input: ' ',
        output: true,
        isValid: true
    },
    {
        input: '&',
        output: false,
        isValid: false
    },
    {
        input: '\\',
        output: false,
        isValid: false
    },
    {
        input: '~',
        output: false,
        isValid: false
    },
    {
        input: '?',
        output: false,
        isValid: false
    }
];

runTestSuite({
    name: 'separator',
    cases: isSeparatorCases,
    func: isSeparator
});
