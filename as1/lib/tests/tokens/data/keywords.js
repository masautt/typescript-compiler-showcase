"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keywords_1 = require("../../../tokens/keywords");
var keywords = [
    {
        value: 'int',
        expected: true
    },
    {
        value: 'float',
        expected: true
    },
    {
        value: 'bool',
        expected: true
    },
    {
        value: 'true',
        expected: true
    },
    {
        value: 'false',
        expected: true
    },
    {
        value: 'if',
        expected: true
    },
    {
        value: 'else',
        expected: true
    },
    {
        value: 'then',
        expected: true
    },
    {
        value: 'endif',
        expected: true
    },
    {
        value: 'while',
        expected: true
    },
    {
        value: 'whileend',
        expected: true
    },
    {
        value: 'do',
        expected: true
    },
    {
        value: 'doend',
        expected: true
    },
    {
        value: 'for',
        expected: true
    },
    {
        value: 'forend',
        expected: true
    },
    {
        value: 'input',
        expected: true
    },
    {
        value: 'output',
        expected: true
    },
    {
        value: 'and',
        expected: true
    },
    {
        value: 'or',
        expected: true
    },
    {
        value: 'not',
        expected: true
    },
    {
        value: 'dowhile',
        expected: false
    },
    {
        value: 'next',
        expected: false
    },
    {
        value: 'jump',
        expected: false
    }
];
exports.keywordSuite = {
    name: 'keyword',
    cases: keywords,
    func: keywords_1.isKeyword
};
