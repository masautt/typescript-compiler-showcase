import { isSeparator } from '../../../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../../../@types/tests';

const isSeparatorCases: TestCase[] = [
    {
        input: "'",
        output: true,
        valid: true
    },
    {
        input: '(',
        output: true,
        valid: true
    },
    {
        input: ')',
        output: true,
        valid: true
    },
    {
        input: '{',
        output: true,
        valid: true
    },
    {
        input: '}',
        output: true,
        valid: true
    },
    {
        input: '[',
        output: true,
        valid: true
    },
    {
        input: ']',
        output: true,
        valid: true
    },
    {
        input: ',',
        output: true,
        valid: true
    },
    {
        input: '.',
        output: true,
        valid: true
    },
    {
        input: ':',
        output: true,
        valid: true
    },
    {
        input: ';',
        output: true,
        valid: true
    },
    {
        input: ' ',
        output: true,
        valid: true
    },
    {
        input: '&',
        output: false,
        valid: false
    },
    {
        input: '\\',
        output: false,
        valid: false
    },
    {
        input: '~',
        output: false,
        valid: false
    },
    {
        input: '?',
        output: false,
        valid: false
    }
];

export const isSeparatorSuite: TestSuite = {
    name: 'separator',
    cases: isSeparatorCases,
    func: isSeparator
};
