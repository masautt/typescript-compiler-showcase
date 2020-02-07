"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _exports_1 = require("../tokens/_exports");
exports.tokenize = function (input) {
    var values = input.split(' ');
    var tokens = getTokens(values);
    return tokens;
    // let { hasUnknown, indexes } = getUnknowns(tokens);
    // if (hasUnknown) {
    //     indexes.forEach((i: any) => {
    //         handleUnknown(tokens[i].value);
    //     });
    // }
};
var getTokens = function (values) {
    return values.map(function (value) {
        var newToken = {
            value: value,
            type: 'unknown'
        };
        if (_exports_1.isKeyword(value)) {
            newToken.type = 'keyword';
            return newToken;
        }
        if (_exports_1.isSeparator(value)) {
            newToken.type = 'separator';
            return newToken;
        }
        if (_exports_1.isOperator(value)) {
            newToken.type = 'operator';
            return newToken;
        }
        if (_exports_1.isValidIdentifier(value)) {
            newToken.type = 'identifier';
            return newToken;
        }
        if (_exports_1.isRealnum(value)) {
            newToken.type = 'real';
            return newToken;
        }
        return newToken;
    });
};
var getUnknowns = function (tokens) {
    var indexes = [];
    var hasUnknown = false;
    tokens.forEach(function (token, i) {
        if (token.type === 'unknown') {
            Number(indexes.push[i]);
            hasUnknown = true;
        }
    });
    return {
        indexes: indexes,
        hasUnknown: hasUnknown
    };
};
var handleUnknown = function (value) { };
