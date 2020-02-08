import { hasKeyword } from '../../utils/tokens/_exports';
import { TestCase } from '../../types/tests';
import { runTestSuite } from '../_exports';

const hasKeywordCases: TestCase[] = [
    {
        input: 'then)',
        output: true,
        isValid: true
    },
    {
        input: '(doend',
        output: true,
        isValid: true
    },
    {
        input: '(or)',
        output: true,
        isValid: true
    },
    {
        input: '{for}',
        output: true,
        isValid: true
    },
    {
        input: '!and',
        output: true,
        isValid: true
    },
    {
        input: '[dowhile',
        output: true,
        isValid: true
    },
    {
        input: 'do;while',
        output: true,
        isValid: true
    },
    {
        input: 'whil',
        output: false,
        isValid: false
    },
    {
        input: 'no',
        output: false,
        isValid: false
    }
];

runTestSuite({
    name: 'keyword',
    cases: hasKeywordCases,
    func: hasKeyword
});
