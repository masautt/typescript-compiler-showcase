import { isKeyword, hasKeyword } from '../../tokens/_exports';
import { TestCase, TestSuite } from '../../@types/tests';

const isKeywordCase: TestCase[] = [
    {
        value: 'int',
        expected: true
    },
    {
        value: 'float',
        expected: true
    },
    {
        value: 'bool',
        expected: true
    },
    {
        value: 'true',
        expected: true
    },
    {
        value: 'false',
        expected: true
    },
    {
        value: 'if',
        expected: true
    },
    {
        value: 'else',
        expected: true
    },
    {
        value: 'then',
        expected: true
    },
    {
        value: 'endif',
        expected: true
    },
    {
        value: 'while',
        expected: true
    },
    {
        value: 'whileend',
        expected: true
    },
    {
        value: 'do',
        expected: true
    },
    {
        value: 'doend',
        expected: true
    },
    {
        value: 'for',
        expected: true
    },
    {
        value: 'forend',
        expected: true
    },
    {
        value: 'input',
        expected: true
    },
    {
        value: 'output',
        expected: true
    },
    {
        value: 'and',
        expected: true
    },
    {
        value: 'or',
        expected: true
    },
    {
        value: 'not',
        expected: true
    },
    {
        value: 'dowhile',
        expected: false
    },
    {
        value: 'next',
        expected: false
    },
    {
        value: 'jump',
        expected: false
    }
];

const hasKeywordCase : TestCase [] = [
    {
        value : "then)",
        expected : true
    },
    {
        value : "(doend",
        expected : true
    },
    {
        value : "(or)",
        expected : true
    },
    {
        value : "{for}",
        expected : true,
    },
    {
        value : "!and",
        expected : true
    },
    {
        value : "[dowhile",
        expected : true
    },
    {
        value : "do;while",
        expected : true
    },
    {
        value : "whil",
        expected : false
    },
    {
        value : "no",
        expected : false
    }
]

export const isKeywordSuite: TestSuite = {
    name: 'keyword',
    cases: isKeywordCase,
    func: isKeyword
};

export const hasKeywordSuite : TestSuite = {
    name : "keyword",
    cases : hasKeywordCase,
    func : hasKeyword
}
