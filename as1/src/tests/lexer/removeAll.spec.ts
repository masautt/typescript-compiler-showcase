import { removeAll } from '../../utils/lexer/_exports';
import { TestCase } from '../../types/tests';
import { runTestSuite } from '../_exports';

const removeAllCases: TestCase[] = [
    {
        input: '! hello world!\n',
        output: '  ',
        isValid: true
    },
    {
        input: '!hello world!\t-',
        output: '  -',
        isValid: true
    },
    {
        input: '!!\r23.00',
        output: '  23.00',
        isValid: true
    },
    {
        input: '!!p!!o!!p!!\nhi',
        output: ' p o p  hi',
        isValid: true
    },
    {
        input: '!3!p!0!o!3!p!0!\rhi',
        output: ' p o p  hi',
        isValid: true
    },
    {
        input: '!This\nshouldnt\nprint\nanything!',
        output: ' ',
        isValid: true
    }
];

runTestSuite({
    name: 'removeAll',
    cases: removeAllCases,
    func: removeAll
});
