"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../../../tokens/main");
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
    func: main_1.isOperator
};
