import { isKeyword } from '../../utils/tokens/_exports';
import { TestCase } from '../../@types/tests';
import { runTestSuite } from '../_exports';

const isKeywordCases: TestCase[] = [
    {
        input: 'int',
        output: true,
        isValid: true
    },
    {
        input: 'float',
        output: true,
        isValid: true
    },
    {
        input: 'bool',
        output: true,
        isValid: true
    },
    {
        input: 'true',
        output: true,
        isValid: true
    },
    {
        input: 'false',
        output: true,
        isValid: true
    },
    {
        input: 'if',
        output: true,
        isValid: true
    },
    {
        input: 'else',
        output: true,
        isValid: true
    },
    {
        input: 'then',
        output: true,
        isValid: true
    },
    {
        input: 'endif',
        output: true,
        isValid: true
    },
    {
        input: 'while',
        output: true,
        isValid: true
    },
    {
        input: 'whileend',
        output: true,
        isValid: true
    },
    {
        input: 'do',
        output: true,
        isValid: true
    },
    {
        input: 'doend',
        output: true,
        isValid: true
    },
    {
        input: 'for',
        output: true,
        isValid: true
    },
    {
        input: 'forend',
        output: true,
        isValid: true
    },
    {
        input: 'input',
        output: true,
        isValid: true
    },
    {
        input: 'output',
        output: true,
        isValid: true
    },
    {
        input: 'and',
        output: true,
        isValid: true
    },
    {
        input: 'or',
        output: true,
        isValid: true
    },
    {
        input: 'not',
        output: true,
        isValid: true
    },
    {
        input: 'dowhile',
        output: false,
        isValid: false
    },
    {
        input: 'next',
        output: false,
        isValid: false
    },
    {
        input: 'jump',
        output: false,
        isValid: false
    }
];

runTestSuite({
    name: 'keyword',
    cases: isKeywordCases,
    func: isKeyword
});
