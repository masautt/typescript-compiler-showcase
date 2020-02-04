"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperator = function (char) { return operators.includes(char); };
exports.hasOperator = function (word) { return word.split('').forEach(function (char) { }); };
var operators = ['*', '+', '-', '=', '/', '>', '<', '%'];
