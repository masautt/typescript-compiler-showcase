"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSeparator = function (char) { return exports.separators.includes(char); };
exports.hasSeparator = function (word) { return exports.separators.some(function (separator) { return word.includes(separator); }); };
exports.separators = [
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
