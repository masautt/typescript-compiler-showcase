import { TestCase, TestSuite } from '../../../../@types/tests';
import { hasOperator } from '../../../../utils/tokens/operators';

const hasOperatorCases: TestCase[] = [
    {
        input: 'hellp*world',
        output: true,
        valid: true
    },
    {
        input: '7+7',
        output: true,
        valid: true
    },
    {
        input: 'y=mx+b',
        output: true,
        valid: true
    },
    {
        input: 'Platform 9 and 3/4',
        output: true,
        valid: true
    },
    {
        input: '3 is < 4',
        output: true,
        valid: true
    },
    {
        input: '(hello)',
        output: false,
        valid: false
    },
    {
        input: '[world]',
        output: false,
        valid: false
    },
    {
        input: 'YouLike?',
        output: false,
        valid: false
    },
    {
        input: 'I do!',
        output: false,
        valid: false
    }
];

export const hasOperatorSuite: TestSuite = {
    name: 'operator',
    cases: hasOperatorCases,
    func: hasOperator
};
