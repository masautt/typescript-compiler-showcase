import { removeComments } from '../../utils/lexer/_exports';
import { TestCase } from '../../types/tests';
import { runTestSuite } from '../_exports';

const removeCommentsCases: TestCase[] = [
    {
        input: '! hello world!',
        output: ' ',
        isValid: true
    },
    {
        input: '!hello world!-',
        output: ' -',
        isValid: true
    },
    {
        input: '!!23.00',
        output: ' 23.00',
        isValid: true
    },
    {
        input: '!!p!!o!!p!!',
        output: ' p o p ',
        isValid: true
    },
    {
        input: '!3!p!0!o!3!p!0!',
        output: ' p o p ',
        isValid: true
    }
];

runTestSuite({
    name: 'removeComments',
    cases: removeCommentsCases,
    func: removeComments
});
