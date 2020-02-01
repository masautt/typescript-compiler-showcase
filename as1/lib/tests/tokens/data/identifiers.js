"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../../../tokens/main");
var identifiers = [
    {
        value: 'num',
        expected: true
    },
    {
        value: 'num1',
        expected: true
    },
    {
        value: 'num$',
        expected: true
    },
    {
        value: 'n1um$',
        expected: true
    },
    {
        value: 'n1um$$',
        expected: true
    },
    {
        value: 'n$1um$$',
        expected: true
    },
    {
        value: '1num',
        expected: false
    },
    {
        value: '$num',
        expected: false
    },
    {
        value: '',
        expected: false
    },
    {
        value: ' ',
        expected: false
    },
    {
        value: '$',
        expected: false
    },
    {
        value: '1',
        expected: false
    },
    {
        value: '*',
        expected: false
    }
];
exports.identifierSuite = {
    name: 'identifier',
    cases: identifiers,
    func: main_1.isValidIdentifier
};
