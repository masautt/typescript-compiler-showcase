import { isKeyword } from "../../tokens/keywords";
import { TestCase } from "../../@types/tests";


const keywords : TestCase[] =  [
    {
        value : "int",
        expected : true
    },
    {
        value : "float",
        expected : true
    },
    {
        value : "bool",
        expected : true
    },
    {
        value : "true",
        expected : true
    },
    {
        value : "false",
        expected : true
    },
    {
        value : "if",
        expected : true
    },
    {
        value : "else",
        expected : true
    },
    {
        value : "then",
        expected : true
    },
    {
        value : "endif",
        expected : true
    },
    {
        value : "while",
        expected : true
    },
    {
        value : "whileend",
        expected : true
    },
    {
        value : "do",
        expected : true
    },
    {
        value : "doend",
        expected : true
    },
    {
        value : "for",
        expected : true
    },
    {
        value : "forend",
        expected : true
    },
    {
        value : "input",
        expected : true
    },
    {
        value : "output",
        expected : true
    },
    {
        value : "and",
        expected : true
    },
    {
        value : "or",
        expected : true
    },
    {
        value : "not",
        expected : true
    },
    {
        value : "dowhile",
        expected : false
    },
    {
        value : "next",
        expected : false
    },
    {
        value : "jump",
        expected : false
    }
]

describe("Testing VALID [keywords]", () =>
    keywords.filter(i => 
        i.expected === true).forEach(i => 
            test(`${i.value} => ${i.expected}`, () => 
                expect(isKeyword(i.value)).toBe(i.expected)))
)

describe("Testing INVALID [keywords]", () => 
    keywords.filter(i => 
        i.expected === false).forEach(i => 
            test(`${i.value} => ${i.expected}`, () => 
                expect(isKeyword(i.value)).toBe(i.expected)))
)

