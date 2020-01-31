import { isValidIdentifier } from "../../tokens/identifiers";
import { TestCase } from "../../@types/tests";


const identifiers : TestCase[] = [
    {
        value : "num",
        expected : true
    },
    {
        value : "num1",
        expected : true
    },
    {
        value : "num$",
        expected : true
    },
    {
        value : "n1um$",
        expected : true
    },
    {
        value : "n1um$$",
        expected : true
    },
    {
        value : "n$1um$$",
        expected : true
    },
    {
        value : "1num",
        expected : false
    },
    {
        value : "$num",
        expected : false
    },
    {
        value : "",
        expected : false
    },
    {
        value : " ",
        expected : false
    },
    {
        value : "$",
        expected : false
    },
    {
        value : "1",
        expected : false
    },
    {
        value : "*",
        expected : false
    }
]

describe("Testing VALID [identifiers]", () =>
    identifiers.filter(i => 
        i.expected === true).forEach(i => 
            test(`${i.value} => ${i.expected}`, () => 
                expect(isValidIdentifier(i.value)).toBe(i.expected)))
)

describe("Testing INVALID [identifiers]", () => 
    identifiers.filter(i => 
        i.expected === false).forEach(i => 
            test(`${i.value} => ${i.expected}`, () => 
                expect(isValidIdentifier(i.value)).toBe(i.expected)))
)

