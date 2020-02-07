import { TestCase, TestSuite } from '../../../../@types/tests';
import { hasKeychar } from '../../../../utils/tokens/_exports';

const hasKeycharCases: TestCase[] = [
    {
        input: 'hellp*world',
        output: true,
        isValid: true
    },
    {
        input: '7+7',
        output: true,
        isValid: true
    },
    {
        input: 'y=mx+b',
        output: true,
        isValid: true
    },
    {
        input: 'Platform 9 and 3/4',
        output: true,
        isValid: true
    },
    {
        input: '3 is < 4',
        output: true,
        isValid: true
    }
];

export const hasKeycharSuite: TestSuite = {
    name: 'operator',
    cases: hasKeycharCases,
    func: hasKeychar
};
