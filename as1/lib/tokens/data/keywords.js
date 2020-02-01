"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isKeyword = function (word) {
    return keywords.includes(word);
};
var keywords = [
    "int",
    "float",
    "bool",
    "true",
    "false",
    "if",
    "else",
    "then",
    "endif",
    "while",
    "whileend",
    "do",
    "doend",
    "for",
    "forend",
    "input",
    "output",
    "and",
    "or",
    "not"
];
