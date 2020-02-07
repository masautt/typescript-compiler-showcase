"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperator = function (char) { return exports.operators.includes(char); };
exports.hasOperator = function (word) { return exports.operators.some(function (operator) { return word.includes(operator); }); };
exports.operators = ['*', '+', '-', '=', '/', '>', '<', '%'];
