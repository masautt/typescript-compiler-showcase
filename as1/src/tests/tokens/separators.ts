import { isSeparator } from '../../tokens/_exports';
import { TestCase, TestSuite } from '../../@types/tests';

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
    },
    {
        value : "~",
        expected : false
    },
    {
        value : "?",
        expected : false
    }
];

export const separatorSuite: TestSuite = {
    name: 'separator',
    cases: separators,
    func: isSeparator
};
