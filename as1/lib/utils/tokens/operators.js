"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperator = function (char) { return operators.includes(char); };
exports.hasOperator = function (word) { return operators.some(function (operator) { return word.includes(operator); }); };
var operators = ['*', '+', '-', '=', '/', '>', '<', '%'];
