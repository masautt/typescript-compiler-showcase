"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSeparator = function (char) { return separators.includes(char); };
exports.hasSeparator = function (word) { return separators.some(function (separator) { return word.includes(separator); }); };
var separators = [
    "'",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    ",",
    ".",
    ":",
    ";",
    " "
];
