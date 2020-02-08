import { isRealnum } from '../../utils/tokens/_exports';
import { TestCase } from '../../types/tests';
import { runTestSuite } from '../_exports';

const isRealnumCases: TestCase[] = [
    {
        input: '193.00',
        output: true,
        isValid: true
    },
    {
        input: '34',
        output: true,
        isValid: true
    },
    {
        input: '2',
        output: true,
        isValid: true
    },
    {
        input: '3424',
        output: true,
        isValid: true
    },
    {
        input: '99999.99',
        output: true,
        isValid: true
    },
    {
        input: '0',
        output: true,
        isValid: true
    },
    {
        input: '',
        output: false,
        isValid: false
    },
    {
        input: '10f',
        output: false,
        isValid: false
    },
    {
        input: '200f',
        output: false,
        isValid: false
    },
    {
        input: '!',
        output: false,
        isValid: false
    },
    {
        input: '{',
        output: false,
        isValid: false
    },
    {
        input: '-',
        output: false,
        isValid: false
    }
];

runTestSuite({
    name: 'real',
    cases: isRealnumCases,
    func: isRealnum
});
