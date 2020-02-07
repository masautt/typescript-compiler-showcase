import { findKeychars } from '../../utils/tokens/_exports';
import { TestCase } from '../../@types/tests';
import { runTestSuite } from '../_exports';

const findKeycharsCases: TestCase[] = [
    {
        input: '()',
        output: {
            isFound: true,
            foundKeychars: [
                {
                    value: '(',
                    index: 0,
                    type: 'separator'
                },
                {
                    value: ')',
                    index: 1,
                    type: 'separator'
                }
            ]
        },
        isValid: true
    },
    {
        input: '(+))',
        output: {
            isFound: true,
            foundKeychars: [
                {
                    value: '(',
                    index: 0,
                    type: 'separator'
                },
                {
                    value: '+',
                    index: 1,
                    type: 'operator'
                },
                {
                    value: ')',
                    index: 2,
                    type: 'separator'
                },
                {
                    value: ')',
                    index: 3,
                    type: 'separator'
                }
            ]
        },
        isValid: false
    },
    {
        input: '(fahr',
        output: {
            isFound: true,
            foundKeychars: [
                {
                    value: '(',
                    index: 0,
                    type: 'separator'
                }
            ]
        },
        isValid: true
    },
    {
        input: 'upper)',
        output: {
            isFound: true,
            foundKeychars: [
                {
                    value: ')',
                    index: 5,
                    type: 'separator'
                }
            ]
        },
        isValid: true
    }
];

runTestSuite({
    name: 'keychar',
    cases: findKeycharsCases,
    func: findKeychars
});
