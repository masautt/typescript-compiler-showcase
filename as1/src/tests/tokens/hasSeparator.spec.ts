import { hasSeparator } from '../../utils/tokens/_exports';
import { runTestSuite } from '../_exports';
import { TestCase } from '../../types/tests';

const hasSeparatorCases: TestCase[] = [
    {
        input: 'hello)',
        output: true,
        isValid: true
    },
    {
        input: '(world',
        output: true,
        isValid: true
    },
    {
        input: 'ple[ase',
        output: true,
        isValid: true
    },
    {
        input: 'hel]p',
        output: true,
        isValid: true
    },
    {
        input: 'me,',
        output: true,
        isValid: true
    },
    {
        input: 'i:hate',
        output: true,
        isValid: true
    },
    {
        input: 'ex;istence',
        output: true,
        isValid: true
    },
    {
        input: 'nosepartor',
        output: false,
        isValid: false
    },
    {
        input: 'Shouldnotreadtrue',
        output: false,
        isValid: false
    },
    {
        input: 'Niethershouldthisone',
        output: false,
        isValid: false
    },
    {
        input: 'hello&gain',
        output: false,
        isValid: false
    }
];

runTestSuite({
    name: 'separator',
    cases: hasSeparatorCases,
    func: hasSeparator
});
