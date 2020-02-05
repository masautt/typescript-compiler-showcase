import { isRealnum } from '../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../@types/tests';

const isRealnumCases: TestCase[] = [
    {
        input: '193.00',
        output : true
    },
    {
        input: '34',
        output : true
    },
    {
        input: '2',
        output : true
    },
    {
        input: '3424',
        output : true
    },
    {
        input: '99999.99',
        output : true
    },
    {
        input: '0',
        output : true
    },
    {
        input: '',
        output : false
    },
    {
        input: '10f',
        output : false
    },
    {
        input: '200f',
        output : false
    },
    {
        input: '!',
        output : false
    },
    {
        input: "{",
        output : false
    },
    {
        input: "-",
        output : false
    }
];

export const isRealnumSuite: TestSuite = {
    name: 'real',
    cases: isRealnumCases,
    func: isRealnum
};
