import { hasSeparator } from '../../../../utils/tokens/_exports';
import { TestCase, TestSuite } from '../../../../@types/tests';

const hasSeparatorCases: TestCase[] = [
    {
        input: 'hello)',
        output: true,
        valid: true
    },
    {
        input: '(world',
        output: true,
        valid: true
    },
    {
        input: 'ple[ase',
        output: true,
        valid: true
    },
    {
        input: 'hel]p',
        output: true,
        valid: true
    },
    {
        input: 'me,',
        output: true,
        valid: true
    },
    {
        input: 'i:hate',
        output: true,
        valid: true
    },
    {
        input: 'ex;istence',
        output: true,
        valid: true
    },
    {
        input: 'nosepartor',
        output: false,
        valid: false
    },
    {
        input: 'Shouldnotreadtrue',
        output: false,
        valid: false
    },
    {
        input: 'Niethershouldthisone',
        output: false,
        valid: false
    },
    {
        input: 'hello&gain',
        output: false,
        valid: false
    }
];

export const hasSeparatorSuite: TestSuite = {
    name: 'separator',
    cases: hasSeparatorCases,
    func: hasSeparator
};
