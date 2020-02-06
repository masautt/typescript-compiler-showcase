import { isKeyword, hasKeyword } from '../../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../../@types/tests';

const isKeywordCases: TestCase[] = [
    {
        input: 'int',
        output: true,
        valid: true
    },
    {
        input: 'float',
        output: true,
        valid: true
    },
    {
        input: 'bool',
        output: true,
        valid: true
    },
    {
        input: 'true',
        output: true,
        valid: true
    },
    {
        input: 'false',
        output: true,
        valid: true
    },
    {
        input: 'if',
        output: true,
        valid: true
    },
    {
        input: 'else',
        output: true,
        valid: true
    },
    {
        input: 'then',
        output: true,
        valid: true
    },
    {
        input: 'endif',
        output: true,
        valid: true
    },
    {
        input: 'while',
        output: true,
        valid: true
    },
    {
        input: 'whileend',
        output: true,
        valid: true
    },
    {
        input: 'do',
        output: true,
        valid: true
    },
    {
        input: 'doend',
        output: true,
        valid: true
    },
    {
        input: 'for',
        output: true,
        valid: true
    },
    {
        input: 'forend',
        output: true,
        valid: true
    },
    {
        input: 'input',
        output: true,
        valid: true
    },
    {
        input: 'output',
        output: true,
        valid: true
    },
    {
        input: 'and',
        output: true,
        valid: true
    },
    {
        input: 'or',
        output: true,
        valid: true
    },
    {
        input: 'not',
        output: true,
        valid: true
    },
    {
        input: 'dowhile',
        output: false,
        valid: false
    },
    {
        input: 'next',
        output: false,
        valid: false
    },
    {
        input: 'jump',
        output: false,
        valid: false
    }
];

const hasKeywordCases: TestCase[] = [
    {
        input: 'then)',
        output: true,
        valid: true
    },
    {
        input: '(doend',
        output: true,
        valid: true
    },
    {
        input: '(or)',
        output: true,
        valid: true
    },
    {
        input: '{for}',
        output: true,
        valid: true
    },
    {
        input: '!and',
        output: true,
        valid: true
    },
    {
        input: '[dowhile',
        output: true,
        valid: true
    },
    {
        input: 'do;while',
        output: true,
        valid: true
    },
    {
        input: 'whil',
        output: false,
        valid: false
    },
    {
        input: 'no',
        output: false,
        valid: false
    }
];

export const isKeywordSuite: TestSuite = {
    name: 'keyword',
    cases: isKeywordCases,
    func: isKeyword
};

export const hasKeywordSuite: TestSuite = {
    name: 'keyword',
    cases: hasKeywordCases,
    func: hasKeyword
};
