import { tokenize } from '../../utils/lexer/_exports';
import { TestCase } from '../../types/tests';
import { runTestSuite } from '../_exports';

const tokenizeCases: TestCase[] = [
    {
        input: 'while (fahr < upper) a = 23.00 whileend',
        output: [
            { value: 'while', type: 'keyword' },
            { value: '(', type: 'separator' },
            { value: 'fahr', type: 'identifier' },
            { value: '<', type: 'operator' },
            { value: 'upper', type: 'identifier' },
            { value: ')', type: 'separator' },
            { value: 'a', type: 'identifier' },
            { value: '=', type: 'operator' },
            { value: '23.00', type: 'real' },
            { value: 'whileend', type: 'keyword' }
        ],
        isValid: true
    },
    {
        input: 'hello world',
        output: [
            { value: 'hello', type: 'identifier' },
            { value: 'world', type: 'identifier' }
        ],
        isValid: true
    }
];

runTestSuite({
    name: 'tokenize',
    cases: tokenizeCases,
    func: tokenize
});
