import { isKeyword, hasKeyword } from '../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../@types/tests';

const isKeywordCases: TestCase[] = [
    {
        input: 'int',
        output: true
    },
    {
        input: 'float',
        output: true
    },
    {
        input: 'bool',
        output: true
    },
    {
        input: 'true',
        output: true
    },
    {
        input: 'false',
        output: true
    },
    {
        input: 'if',
        output: true
    },
    {
        input: 'else',
        output: true
    },
    {
        input: 'then',
        output: true
    },
    {
        input: 'endif',
        output: true
    },
    {
        input: 'while',
        output: true
    },
    {
        input: 'whileend',
        output: true
    },
    {
        input: 'do',
        output: true
    },
    {
        input: 'doend',
        output: true
    },
    {
        input: 'for',
        output: true
    },
    {
        input: 'forend',
        output: true
    },
    {
        input: 'input',
        output: true
    },
    {
        input: 'output',
        output: true
    },
    {
        input: 'and',
        output: true
    },
    {
        input: 'or',
        output: true
    },
    {
        input: 'not',
        output: true
    },
    {
        input: 'dowhile',
        output: false
    },
    {
        input: 'next',
        output: false
    },
    {
        input: 'jump',
        output: false
    }
];

const hasKeywordCases : TestCase [] = [
    {
        input: "then)",
        output: true
    },
    {
        input: "(doend",
        output: true
    },
    {
        input: "(or)",
        output: true
    },
    {
        input: "{for}",
        output: true,
    },
    {
        input: "!and",
        output: true
    },
    {
        input: "[dowhile",
        output: true
    },
    {
        input: "do;while",
        output: true
    },
    {
        input: "whil",
        output: false
    },
    {
        input: "no",
        output: false
    }
]

export const isKeywordSuite: TestSuite = {
    name: 'keyword',
    cases: isKeywordCases,
    func: isKeyword
};

export const hasKeywordSuite : TestSuite = {
    name : "keyword",
    cases : hasKeywordCases,
    func : hasKeyword
}
