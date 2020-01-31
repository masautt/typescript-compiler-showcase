"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperator = function (char) {
    return operators.includes(char);
};
var operators = [
    "*",
    "+",
    "-",
    "=",
    "/",
    ">",
    "<",
    "%"
];
