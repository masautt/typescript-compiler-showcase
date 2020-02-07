"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _exports_1 = require("../tokens/_exports");
var _exports_2 = require("./_exports");
exports.tokenize = function (input) {
    var tokens = exports.getTokens(input.split(' '));
    if (_exports_2.hasUnknowns(tokens))
        tokens = _exports_2.getUnknowns(tokens);
    return tokens;
};
exports.getTokens = function (values) {
    return values.map(function (value) {
        var type = 'unknown';
        if (_exports_1.isKeyword(value))
            type = 'keyword';
        if (_exports_1.isSeparator(value))
            type = 'separator';
        if (_exports_1.isOperator(value))
            type = 'operator';
        if (_exports_1.isValidIdentifier(value))
            type = 'identifier';
        if (_exports_1.isRealnum(value))
            type = 'real';
        return {
            type: type,
            value: value
        };
    });
};
