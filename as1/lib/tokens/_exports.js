"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keywords_1 = require("./keywords");
exports.isKeyword = keywords_1.isKeyword;
var operators_1 = require("./operators");
exports.isOperator = operators_1.isOperator;
var separators_1 = require("./separators");
exports.isSeparator = separators_1.isSeparator;
var identifiers_1 = require("./identifiers");
exports.isValidIdentifier = identifiers_1.isValidIdentifier;
var real_1 = require("./real");
exports.isReal = real_1.isReal;
var identifiers_2 = require("./identifiers");
var separators_2 = require("./separators");
var operators_2 = require("./operators");
var keywords_2 = require("./keywords");
var real_2 = require("./real");
exports.getTokens = function (values) {
    return values.map(function (value) {
        var newToken = {
            value: value,
            type: 'unknown'
        };
        if (keywords_2.isKeyword(value)) {
            newToken.type = 'keyword';
            return newToken;
        }
        if (separators_2.isSeparator(value)) {
            newToken.type = 'separator';
            return newToken;
        }
        if (operators_2.isOperator(value)) {
            newToken.type = 'operator';
            return newToken;
        }
        if (identifiers_2.isValidIdentifier(value)) {
            newToken.type = 'identifer';
            return newToken;
        }
        if (real_2.isReal(value)) {
            newToken.type = 'real';
            return newToken;
        }
        return newToken;
    });
};
