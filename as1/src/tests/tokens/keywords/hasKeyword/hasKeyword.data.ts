import { hasKeyword } from '../../../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../../../@types/tests';

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

export const hasKeywordSuite: TestSuite = {
    name: 'keyword',
    cases: hasKeywordCases,
    func: hasKeyword
};
