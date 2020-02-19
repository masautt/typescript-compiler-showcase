import { getCleanInput } from '../../utils/lexer/_exports';
import { TestCase } from '../../types/tests';
import { runTestSuite } from '../_exports';

const getCleanInputCases: TestCase[] = [
    {
        input: 'while (fahr < upper) a = 23.00 whileend',
        output: ['while', '(', 'fahr', '<', 'upper', ')', 'a', '=', '23.00', 'whileend'],
        isValid: true
    },
    {
        input: 'hello world',
        output: ['hello', 'world'],
        isValid: true
    },
    {
        input: '23.00',
        output: ['23.00'],
        isValid: true
    },
    {
        input: '(23.00)',
        output: ['(', '23.00', ')'],
        isValid: true
    },
    {
        input: '{(23.00)}',
        output: ['{', '(', '23.00', ')', '}'],
        isValid: true
    },
    {
        input: "! This shouldn't be loading !",
        output: [],
        isValid: true
    },
    {
        input: '! This should be loading a - !-',
        output: ['-'],
        isValid: true
    }
];

runTestSuite({
    name: 'getCleanInput',
    cases: getCleanInputCases,
    func: getCleanInput
});
