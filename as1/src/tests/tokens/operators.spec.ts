import { isOperator } from "../../tokens/operators";
import { TestCase } from "../../@types/tests";


const operators : TestCase[] =  [
    {
        value : "*",
        expected : true
    },
    {
        value : "+",
        expected : true
    },
    {
        value : "-",
        expected : true
    },
    {
        value : "=",
        expected : true
    },
    {
        value : "/",
        expected : true
    },
    {
        value : ">",
        expected : true
    },
    {
        value : "<",
        expected : true
    },
    {
        value : "%",
        expected : true
    },
    {
        value : "?",
        expected : false
    },
    {
        value : "!",
        expected : false
    }
]

describe("Testing VALID [operators]", () =>
    operators.filter(i => 
        i.expected === true).forEach(i => 
            test(`${i.value} => ${i.expected}`, () => 
                expect(isOperator(i.value)).toBe(i.expected)))
)

describe("Testing INVALID [operators]", () => 
    operators.filter(i => 
        i.expected === false).forEach(i => 
            test(`${i.value} => ${i.expected}`, () => 
                expect(isOperator(i.value)).toBe(i.expected)))
)

