import { isOperator } from '../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../@types/tests';
import { hasOperator } from '../../utils/tokens/operators';

const isOperatorCases: TestCase[] = [
    {
        input: '*',
        output : true
    },
    {
        input: '+',
        output : true
    },
    {
        input: '-',
        output : true
    },
    {
        input: '=',
        output : true
    },
    {
        input: '/',
        output : true
    },
    {
        input: '>',
        output : true
    },
    {
        input: '<',
        output : true
    },
    {
        input: '%',
        output : true
    },
    {
        input: '?',
        output : false
    },
    {
        input: '!',
        output : false
    }
];

const hasOperatorCases : TestCase[] = [
    {
        input: "hellp*world",
        output : true
    },
    {
        input: "7+7",
        output : true
    },
    {
        input: "y=mx+b",
        output : true
    },
    {
        input: "Platform 9 and 3/4",
        output : true
    },
    {
        input: "3 is < 4",
        output : true
    },
    {
        input: "(hello)",
        output : false
    },
    {
        input: "[world]",
        output : false
    },
    {
        input: "YouLike?",
        output : false
    },
    {
        input: "I do!",
        output : false
    }


]

export const isOperatorSuite: TestSuite = {
    name: 'operator',
    cases: isOperatorCases,
    func: isOperator
};

export const hasOperatorSuite : TestSuite = {
    name : "operator",
    cases : hasOperatorCases,
    func : hasOperator
}