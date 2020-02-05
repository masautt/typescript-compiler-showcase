import { isSeparator, hasSeparator } from '../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../@types/tests';

const isSeparatorCases: TestCase[] = [
    {
        input: "'",
        output : true
    },
    {
        input: '(',
        output : true
    },
    {
        input: ')',
        output : true
    },
    {
        input: '{',
        output : true
    },
    {
        input: '}',
        output : true
    },
    {
        input: '[',
        output : true
    },
    {
        input: ']',
        output : true
    },
    {
        input: ',',
        output : true
    },
    {
        input: '.',
        output : true
    },
    {
        input: ':',
        output : true
    },
    {
        input: ';',
        output : true
    },
    {
        input: ' ',
        output : true
    },
    {
        input: '&',
        output : false
    },
    {
        input: '\\',
        output : false
    },
    {
        input: "~",
        output : false
    },
    {
        input: "?",
        output : false
    }
];

const hasSeparatorCases : TestCase[] = [
    {
        input: "hello)",
        output : true
    },
    {
        input: "(world",
        output : true
    },
    {
        input: "ple[ase",
        output : true
    },
    {
        input: "hel]p",
        output : true
    },
    {
        input: "me,",
        output : true
    }, 
    {
        input: "i:hate",
        output : true
    },
    {
        input: "ex;istence",
        output : true
    },
    {
        input: "nosepartor",
        output : false
    },
    {
        input: "Shouldnotreadtrue",
        output : false
    },
    {
        input: "Niethershouldthisone",
        output : false
    },
    {
        input: "hello&gain",
        output : false
    }
]
export const isSeparatorSuite: TestSuite = {
    name: 'separator',
    cases: isSeparatorCases,
    func: isSeparator
};

export const hasSeparatorSuite : TestSuite = {
    name : "separator",
    cases : hasSeparatorCases,
    func : hasSeparator
}
