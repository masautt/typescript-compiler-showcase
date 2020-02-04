import { isReal } from '../../tokens/_exports';
import { TestCase, TestSuite } from '../../@types/tests';

const reals: TestCase[] = [
    {
        value: '193.00',
        expected: true
    },
    {
        value: '34',
        expected: true
    },
    {
        value: '2',
        expected: true
    },
    {
        value: '3424',
        expected: true
    },
    {
        value: '99999.99',
        expected: true
    },
    {
        value: '0',
        expected: true
    },
    {
        value: '',
        expected: false
    },
    {
        value: '10f',
        expected: false
    },
    {
        value: '200f',
        expected: false
    },
    {
        value: '!',
        expected: false
    },
    {
        value : "{",
        expected : false
    },
    {
        value : "-",
        expected : false
    }
];

export const realSuite: TestSuite = {
    name: 'real',
    cases: reals,
    func: isReal
};
