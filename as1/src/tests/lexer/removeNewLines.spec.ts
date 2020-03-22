import { removeNewLines } from '../../utils/lexer/_exports';
import { TestCase } from '../../types/tests';
import { runTestSuite } from '../_exports';

const removeNewLinesCases: TestCase[] = [
    {
        input: `hello\nworld`,
        output: 'hello world',
        isValid: true
    },
    {
        input: 'hi\tthere',
        output: 'hi there',
        isValid: true
    },
    {
        input: 'yo\rnext',
        output: 'yo next',
        isValid: true
    },
    {
        input: '\r\nd',
        output: ' d',
        isValid: true
    }
];

runTestSuite({
    name: 'removeNewLines',
    cases: removeNewLinesCases,
    func: removeNewLines
});
