import { TestCase, TestSuite } from '../../../../@types/tests';
import { hasOperator } from '../../../../utils/tokens/_exports';

const hasOperatorCases: TestCase[] = [
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
    },
    {
        input: '(hello)',
        output: false,
        isValid: false
    },
    {
        input: '[world]',
        output: false,
        isValid: false
    },
    {
        input: 'YouLike?',
        output: false,
        isValid: false
    },
    {
        input: 'I do!',
        output: false,
        isValid: false
    }
];

export const hasOperatorSuite: TestSuite = {
    name: 'operator',
    cases: hasOperatorCases,
    func: hasOperator
};
