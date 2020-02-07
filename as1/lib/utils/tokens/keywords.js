"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isKeyword = function (word) { return exports.keywords.includes(word); };
exports.hasKeyword = function (word) { return exports.keywords.some(function (keyword) { return word.includes(keyword); }); };
exports.keywords = [
    'int',
    'float',
    'bool',
    'true',
    'false',
    'if',
    'else',
    'then',
    'endif',
    'while',
    'whileend',
    'do',
    'doend',
    'for',
    'forend',
    'input',
    'output',
    'and',
    'or',
    'not'
];
