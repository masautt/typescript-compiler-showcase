"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keywords_1 = require("./data/keywords");
exports.isKeyword = keywords_1.isKeyword;
var operators_1 = require("./data/operators");
exports.isOperator = operators_1.isOperator;
var separators_1 = require("./data/separators");
exports.isSeparator = separators_1.isSeparator;
var identifiers_1 = require("./data/identifiers");
exports.isValidIdentifier = identifiers_1.isValidIdentifier;
var identifiers_2 = require("./data/identifiers");
var separators_2 = require("./data/separators");
var operators_2 = require("./data/operators");
var keywords_2 = require("./data/keywords");
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
        return newToken;
    });
};
