"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../../../tokens/main");
var separators = [
    {
        value: "'",
        expected: true
    },
    {
        value: '(',
        expected: true
    },
    {
        value: ')',
        expected: true
    },
    {
        value: '{',
        expected: true
    },
    {
        value: '}',
        expected: true
    },
    {
        value: '[',
        expected: true
    },
    {
        value: ']',
        expected: true
    },
    {
        value: ',',
        expected: true
    },
    {
        value: '.',
        expected: true
    },
    {
        value: ':',
        expected: true
    },
    {
        value: ';',
        expected: true
    },
    {
        value: ' ',
        expected: true
    },
    {
        value: '&',
        expected: false
    },
    {
        value: '\\',
        expected: false
    }
];
exports.separatorSuite = {
    name: 'operator',
    cases: separators,
    func: main_1.isSeparator
};
