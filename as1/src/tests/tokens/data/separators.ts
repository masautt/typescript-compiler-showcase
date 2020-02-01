import { isSeparator } from '../../../tokens/main';
import { TestCase, TestSuite } from '../../../@types/tests';

const separators: TestCase[] = [
    {
        value: "'",
        expected: true
    },
    {
        value: '(',
        expected: true
    },
    {
        value: ')',
        expected: true
    },
    {
        value: '{',
        expected: true
    },
    {
        value: '}',
        expected: true
    },
    {
        value: '[',
        expected: true
    },
    {
        value: ']',
        expected: true
    },
    {
        value: ',',
        expected: true
    },
    {
        value: '.',
        expected: true
    },
    {
        value: ':',
        expected: true
    },
    {
        value: ';',
        expected: true
    },
    {
        value: ' ',
        expected: true
    },
    {
        value: '&',
        expected: false
    },
    {
        value: '\\',
        expected: false
    }
];

export const separatorSuite: TestSuite = {
    name: 'operator',
    cases: separators,
    func: isSeparator
};
