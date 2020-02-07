import { isKeychar } from '../../../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../../../@types/tests';

const isKeycharCases: TestCase[] = [
    {
        input: '*',
        output: true,
        isValid: true
    },
    {
        input: '+',
        output: true,
        isValid: true
    },
    {
        input: '-',
        output: true,
        isValid: true
    },
    {
        input: '=',
        output: true,
        isValid: true
    },
    {
        input: '/',
        output: true,
        isValid: true
    },
    {
        input: '>',
        output: true,
        isValid: true
    },
    {
        input: '<',
        output: true,
        isValid: true
    },
    {
        input: '%',
        output: true,
        isValid: true
    }
];

export const isKeycharSuite: TestSuite = {
    name: 'operator',
    cases: isKeycharCases,
    func: isKeychar
};
