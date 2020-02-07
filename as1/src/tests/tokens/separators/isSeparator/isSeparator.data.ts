import { isSeparator } from '../../../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../../../@types/tests';

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

export const isSeparatorSuite: TestSuite = {
    name: 'separator',
    cases: isSeparatorCases,
    func: isSeparator
};
