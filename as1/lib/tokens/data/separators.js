"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSeparator = function (char) {
    return separators.includes(char);
};
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
