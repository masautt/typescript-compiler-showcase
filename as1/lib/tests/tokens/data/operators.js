"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("../../../tokens/operators");
var operators = [
    {
        value: '*',
        expected: true
    },
    {
        value: '+',
        expected: true
    },
    {
        value: '-',
        expected: true
    },
    {
        value: '=',
        expected: true
    },
    {
        value: '/',
        expected: true
    },
    {
        value: '>',
        expected: true
    },
    {
        value: '<',
        expected: true
    },
    {
        value: '%',
        expected: true
    },
    {
        value: '?',
        expected: false
    },
    {
        value: '!',
        expected: false
    }
];
exports.operatorSuite = {
    name: 'operator',
    cases: operators,
    func: operators_1.isOperator
};
