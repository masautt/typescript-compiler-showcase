import { isRealnum } from '../../../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../../../@types/tests';

const isRealnumCases: TestCase[] = [
    {
        input: '193.00',
        output: true,
        valid: true
    },
    {
        input: '34',
        output: true,
        valid: true
    },
    {
        input: '2',
        output: true,
        valid: true
    },
    {
        input: '3424',
        output: true,
        valid: true
    },
    {
        input: '99999.99',
        output: true,
        valid: true
    },
    {
        input: '0',
        output: true,
        valid: true
    },
    {
        input: '',
        output: false,
        valid: false
    },
    {
        input: '10f',
        output: false,
        valid: false
    },
    {
        input: '200f',
        output: false,
        valid: false
    },
    {
        input: '!',
        output: false,
        valid: false
    },
    {
        input: '{',
        output: false,
        valid: false
    },
    {
        input: '-',
        output: false,
        valid: false
    }
];

export const isRealnumSuite: TestSuite = {
    name: 'real',
    cases: isRealnumCases,
    func: isRealnum
};
