"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _exports_1 = require("../tokens/_exports");
exports.tokenize = function (values) {
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
            newToken.type = 'identifer';
            return newToken;
        }
        if (_exports_1.isRealnum(value)) {
            newToken.type = 'real';
            return newToken;
        }
        return newToken;
    });
};
