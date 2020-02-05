import { tokenize } from "../../utils/lexer/_exports";
import { TestCase, TestSuite } from '../../@types/tests';

const tokenizeCases : TestCase [] = [
    {
        input : "while (fahr < upper) a = 23.00 whileend",
        output : [
            { value: 'while', type: 'keyword' },
            { value: '(fahr', type: 'unknown' },
            { value: '<', type: 'operator' },
            { value: 'upper)', type: 'unknown' },
            { value: 'a', type: 'identifer' },
            { value: '=', type: 'operator' },
            { value: '23.00', type: 'real' },
            { value: 'whileend', type: 'keyword' }
          ]
    }
]

export const tokenizeSuite : TestSuite = {
    name : "tokenize",
    cases : tokenizeCases,
    func : tokenize
}